// config/express.js
var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
    
    var app = express();
    
    // variável de ambiente
    app.set('port', 3000);
    
    // middleware
    app.use(express.static('./public'));
    
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    // abaixo da configuração do último middleware
    home(app);

    return app;
};