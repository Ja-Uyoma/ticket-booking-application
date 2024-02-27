import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config.js";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";

const app = express();

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
