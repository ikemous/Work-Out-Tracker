const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static("public"));

mongoose.connect(MONGODB_URI);

server.use(require("./routes/api-routes.js"));
server.use(require("./routes/html-routes.js"));

server.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});