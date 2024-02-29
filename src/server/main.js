import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config.js";
import { Sequelize, DataTypes } from "sequelize";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";
import morgan from "morgan";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";

const sequelize = new Sequelize("ticketpal", process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been created successfully");
} catch (err) {
  console.error("Unable to connect to the database");
}

const Event = sequelize.define("Event", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maxAttendees: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticketType: {
    type: DataTypes.ENUM("Regular", "VIP"),
    allowNull: false,
  },
  ticketPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

await Event.sync({ force: true });

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("Admin", "Regular"),
    allowNull: false,
    defaultValue: "Regular",
  },
});

await User.sync({ force: true });

try {
  const email = "jimmiegivens17@gmail.com";
  const password = "admin";

  const admin = await User.findOne({ where: { email: email } });

  if (!admin) {
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        console.error(err);
      }

      await User.create({ email: email, password: hashedPassword, role: "Admin" });
      console.log("Admin user created successfully");
    });
  }
} catch (err) {
  console.error("Could not create an admin user", err);
}

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

function authorizeUser(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

app.post(
  "/api/v1/register",
  body("email")
    .isEmail()
    .custom(async (value) => {
      const existingUser = await User.findOne({ where: { email: value } });

      if (existingUser) {
        throw new Error("email already in use");
      }
    }),
  body("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }

    return true;
  }),
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email cannot be empty" });
    } else if (!password) {
      return res.status(400).json({ message: "Password cannot be empty" });
    }

    try {
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
          return next(err);
        }

        await User.create({ email: email, password: hashedPassword });
        res.status(200).json({ message: "User registered successfully!" });
      });
    } catch (err) {
      console.error("User registration failed.", err);
      next(err);
    }
  }
);

app.post(
  "/api/v1/login",
  body("email").isEmail(),
  passport.authenticate("local", {
    successRedirect: "",
    failureRedirect: "",
  }),
  (req, res) => {
    res.status(200).json({ message: "Login successful" });
  }
);

app.get("/api/v1/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/api/v1/events", async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    res.status(400).json({ message: "Could not retrieve data", error: err });
  }
});

app.get("/api/v1/events/:eventID", async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.eventID);
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: "Could not retrieve event", error: err });
  }
});

app.post(
  "/api/v1/events",
  authorizeUser,
  [
    body("name").isString(),
    body("description").isString(),
    body("venue").isString(),
    body("date").isISO8601().toDate(),
    body("maxAttendees").isInt({ min: 1 }),
    body("ticketType").isIn(["VIP", "Regular"]),
    body("ticketPrice").isInt({ min: 0 }),
  ],
  async (req, res) => {
    const { name, description, date, venue, maxAttendees, ticketType, ticketPrice } = req.body;

    try {
      const event = await Event.create({
        name: name,
        description: description,
        date: date,
        venue: venue,
        maxAttendees: maxAttendees,
        ticketType: ticketType,
        ticketPrice: ticketPrice,
      });

      res.json({ message: "Event created successfully", event: event });
    } catch (err) {
      res.json({ message: "Event creation failed", error: err });
    }
  }
);

app.put(
  "/api/v1/events/:eventID",
  authorizeUser,
  [
    body("name").optional().isString().notEmpty(),
    body("description").optional().isString(),
    body("date").optional().isISO8601().toDate(),
    body("venue").optional().isString().notEmpty(),
    body("maxAttendees").optional().isInt({ min: 1 }),
    body("ticketType").optional().isIn(["Regular", "VIP"]),
    body("ticketPrice").optional().isInt({ min: 0 }),
  ],
  async (req, res) => {
    const { name, description, date, venue, maxAttendees, ticketType, ticketPrice } = req.body;

    try {
      const event = await Event.findByPk(req.params.eventID);

      if (!event) {
        return res.status(400).json({ message: "Event not found" });
      }

      if (name) {
        event.name = name;
      }

      if (description) {
        event.description = description;
      }

      if (date) {
        event.date = date;
      }

      if (venue) {
        event.venue = venue;
      }
      if (maxAttendees) {
        event.maxAttendees = maxAttendees;
      }
      if (ticketType) {
        event.ticketType = ticketType;
      }
      if (ticketPrice) {
        event.ticketPrice = ticketPrice;
      }

      await event.save();

      res.json({ message: "Event updated successfully!", event: event });
    } catch (err) {
      res.status(500).json({ message: "Could not update event", error: err });
    }
  }
);

app.delete("/api/v1/events/:eventID", authorizeUser, async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.eventID);
    await event.destroy();

    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Could not delete event" });
  }
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
