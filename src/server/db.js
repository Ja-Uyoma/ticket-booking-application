import { Sequelize, DataTypes } from "sequelize";

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

await Event.sync();

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

await User.sync();

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  bookingCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

User.belongsToMany(Event, { through: Booking });
Event.belongsToMany(User, { through: Booking });

await Booking.sync();

export { Event, User, Booking };
