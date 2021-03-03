const express = require("express");
const app = express();
const port = 8000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", function(req, res,) {
  res.render("home", {
    stylesheets: [
      {
        href: "/css/homepage.css"
      }
    ],
    page: {
      isActiveHome: true,
      title: "Cui'zine",
      subtitle: "Le mag cuisine"
    }
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    showTitle: true,
    stylesheets: [
      {
        href: "/css/contact.css"
      }
    ],
    scripts: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdNMQdR-VMhV9-9QG9JKukwOK1ylSDGis&callback=initMap",
        async: true,
        defer: true
      },
      {
        src: "/js/contact.js"
      }
    ],
    page: {
      isActiveContact: true,
      title: "Nous contacter"
    }
  });
});

app.get('/page2', (req, res) => {
  res.render('page2');
});

app.get("/post", function(req, res) {
  res.render("post", {
    stylesheets: [
      {
        href: "/css/post.css"
      }
    ],
    page: {
      isActivePost: true,
      title: "Chez Suzette, la nouvelle crêperie qui fait parler d'elle"
    }
  });
});


app.get("/recipe", function(req, res) {
  res.render("recipe", {
    stylesheets: [
      {
        href: "/css/recipe.css"
      }
    ],
    page: {
      isActiveRecipe: true,
      title: "Paëlla",
      subtitle: "Le plat familial de votre été 2019",
      ingredients: [
        "6 moules",
        "1/2 poulet",
        "125g de porc maigre",
        "60g de chorizo",
        "Amandes d'Espagne",
        "4 crevettes",
        "1/2 verre d'huile d'olive",
        "3 cuillères de vin",
        "1 oignon",
        "2 gousses d'ails",
        "2 tomates",
        "1 piment doux",
        "250g de riz",
        "Du persil",
        "Poivre de Cayenne",
        "2 verres de bouillon",
        "Poivre noir",
        "Sel",
        "125 g de getit pois"
      ],
      steps: [
        "Verser la moitié de l'huile dans une très large poêle, y faire dorer le poulet, le porc et la saucisse jusqu'à mi-cuisson, puis les retirer.",
        "Pendant ce temps, faire ouvrir les moules et les coques dans le vin blanc avec 2 cuillères à soupe d'oignons émincés et de persil haché.",
        "Les mettre de côté et réserver le jus filtré.",
        "Rajouter les crevettes ou langoustines dans la poêle avec la viande, les faire sauter puis retirer le tout et réserver.",
        "Remettre un peu d'huile et faire suer l'oignon d'Espagne et 2 gousses d'ail émincées dans la poêle.",
        "Rajouter les tomates pelées et coupées, les piments émincés et laisser cuire doucement pendant 5 min, en remuant constamment.",
        "Retirer tout le mélange de la poêle, et rajouter le reste d'huile.",
        "Faire chauffer l'huile et y verser le riz.",
        "Remuer à la spatule et laisser le riz devenir transparent et crépiter.",
        "A ce moment, verser le bouillon très chaud, l'eau des moules et le safran délayé dans un peu d'eau chaude.",
        "Remettre tous les ingrédients sauf les petits pois.",
        "Porter à ébullition doucement et laisser mijoter 15 min sans remuer.",
        "Rajouter les petits pois et le reste de la langouste, puis placer en surface quelques crevettes, moules, coques et morceaux de poulet.",
        "Couvrir, et prolongez la cuisson de 5 à 10 min, le riz doit avoir absorbé tout le jus tout en gardant une texture ferme"
      ],
      ads: ["dessert1", "side1", "dessert2"]
    }
  });
});

app.get("/team/member", function(req, res) {
  res.render("team-member", {
    stylesheets: [
      {
        href: "/css/team-member.css"
      }
    ],
    page: {
      isActiveTeam: true,
      title: "Anthony",
      subtitle: "Gouteur professionnel"
    }
  });
});

app.get("/team", function(req, res) {
  res.render("team", {
    stylesheets: [
      {
        href: "/css/team.css"
      }
    ],
    page: {
      isActiveTeam: true,
      title: "On apprend en enseignant",
      subtitle: "Un pour tous et tous pour un"
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur port ${port}`);
});
