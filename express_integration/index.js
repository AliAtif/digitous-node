const express = require("express");
const app = express();
const port = 8000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
  });

app.listen(port, () => {
  console.log(`Serveur lancé sur port ${port}`);
});

app.get('/contact', (req, res) => {
  res.render('Contact');
});
app.get('/page2', (req, res) => {
  res.render('Page2');
});
app.get('/post', (req, res) => {
  res.render('Post!');
});
app.get('/recipe', (req, res) => {
  res.render('Recipe!');
});
app.get('/team-member', (req, res) => {
  res.render('Team-member!');
});
app.get('/team', (req, res) => {
  res.render('Team');
});
