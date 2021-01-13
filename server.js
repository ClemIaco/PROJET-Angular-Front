/**
 * Serveur Web pour la version hébergé sur HEROKU
 */

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/AngularForm'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/AngularForm/index.html');
});

app.listen(process.env.PORT || 8080);