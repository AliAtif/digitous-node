const express = require("express");
const app = express();
const port = 8000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.static("images"));

app.listen(port, () => {
  console.log(`Serveur lancé ${port}`);
});

app.get("/:lang?", (req, res) => {
  switch (req.params.lang) {
    case "fr":
      res.render("home", {title:"text"});
      break;
    case "en":
      res.render("home", {title: "text"});
      break;
    case "es":
      res.render("home", {title: "text"});
      break;
    default:
      res.render("home", {title: "text"});
  }
});
