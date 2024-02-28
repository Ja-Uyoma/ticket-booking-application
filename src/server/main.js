import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config.js";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import morgan from "morgan";
import cors from "cors";
import User from "./db/User.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));

app.post("/api/v1/register", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send("Email cannot be empty");
  } else if (!password) {
    return res.status(400).send("Password cannot be empty");
  }

  try {
    await User.create({ user_email: email, user_password: password });
    res.status(200).send("User registered successfully");
  } catch (err) {
    console.log("User registration failed:", err);
    next(err);
  }
});
