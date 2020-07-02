const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static("public"));

// server.use(require("../routes/html-routes.js"));
server.use(require("./routes/html-routes.js"));

server.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});