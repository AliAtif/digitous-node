const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = 8000;

let userConnected = false;

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.listen(port, () => {
  console.log("Serveur lancé");
});

app.get("/", (req, res) => {
  res.render("login", {passwordTooShort: false});
});

app.get("/home", (req, res) => {
  if (userConnected) {
    res.render("home", {
        title: "Bonjour",
        sousTitre: "Ca va ? "
    });
  } else {
    res.redirect("/");
  }
});

app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.send("Yeshi's route !");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.password.length < 8) {
    res.render("login", {passwordTooShort: true});
  } else {
    userConnected = true;
    res.redirect("/home");
  }
});
