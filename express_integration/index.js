const express = require("express");
const app = express();
const port = 8000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("home");
  });

app.listen(port, () => {
  console.log(`Serveur lancé sur port ${port}`);
});

app.get('/contact', (req, res) => {
  res.send('Contact');
});
app.get('/page2', (req, res) => {
  res.send('Page2');
});
app.get('/post', (req, res) => {
  res.send('Post!');
});
app.get('/recipe', (req, res) => {
  res.send('Recipe!');
});
app.get('/team-member', (req, res) => {
  res.send('Team-member!');
});
app.get('/team', (req, res) => {
  res.send('Team');
});
