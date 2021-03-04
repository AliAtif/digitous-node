const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.listen(port, () => {
    console.log(`Serveur lancé sur port ${port}`);
  });

  const students = [
    {
        name : "toto",
        level : "2"
    },

    {
        name : "tata",
        level : "3"
    },

    {
        name : "titi",
        level : "3"
    }
  ]

  app.get("/students", (req, res) => {
    res.json(students);
})

app.post("/students", (req, res) => {
    students.push(req.body);
    res.send("Etudiant ajouté !");
})