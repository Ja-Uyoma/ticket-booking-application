import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config.js";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import morgan from "morgan";
import User from "./db/User.js";

const app = express();

app.use(morgan("dev"));
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));

app.post("/api/v1/register", async (req, res, next) => {
  try {
    await User.create({ user_email: req.body.email, user_password: req.body.password });
    res.status(200).send("User registered successfully");
  } catch (err) {
    return next(err);
  }
});
