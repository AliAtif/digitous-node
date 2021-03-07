const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.listen(port, () => {
    console.log(`Serveur lancé sur port ${port}`);
  });

  const associations = [
    {
        image: '',
        name: 'restau-du-coeur',
        description: ''
    }, {
        image: '',
        name: 'la-croix-rouge',
        description: ''
    }, {
        image: '',
        name: 'konexio',
        description: ''
    }
]

app.get('/', (req, res) => {
    res.send("restau-du-coeur, la-croix-rouge, konexio")
})