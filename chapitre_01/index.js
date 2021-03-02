const { request, response } = require('express');
const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});


//exe-0
app.get("/", (request, response) => {
    response.send("Authors API");
})


/*//exe-1 */

const authors = ["Lawrence Nowell, UK", "William Shakespeare, UK",
 "Charles Dickens, US", "Oscar Wilde, UK"]
 
const books = ["Beowulf", "Hamlet, Othello, Romeo and Juliet, MacBeth", 
"Oliver Twist, A Christmas Carol", "The Picture of Dorian Gray, The Importance of Being Earnest"]

const data = [{
    id : 1,
    author: "Lawrence Nowell",
    nationality: "UK",
    books: "Beowulf"
},

 {
    id : 2,
    author: "William Shakespeare",
    nationality: "UK",
    books: "Hamlet, Othello, Romeo and Juliet, MacBeth"
},

 {
    id : 3,
    author: "Charles Dickens",
    nationality: "US",
    books: "Oliver Twist, A Christmas Carol"
}, 

{   
    id : 4,
    author: "Oscar Wilde",
    nationality: "UK",
    books: "The Picture of Dorian Gray, The Importance of Being Earnest",
}]

app.get("/authors/:id", (request, response) => {
    if (authors[request.params.id] === undefined) {
        response.send(`The author with the ID ${request.params.id} does not exist`)
    }
     else{
        response.send(`${authors[request.params.id]}`)
     } 
    }

     )

  
      

app.get("/cars/", (request, res) => {
    response.send("error")
})

