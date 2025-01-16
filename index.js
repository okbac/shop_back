//récupération des dépendances
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require ("cors");

require("./database/configDB");

// on accepte les requêtes de toutes origines
app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);


//on indique le chemin des routes
const routes = require ("./routes/products");
app.use(routes);

// on indique que l'application va edouter sur le port 5000 et 
app.listen(5000,() => {
    console.log("App listening on port 5000");
});