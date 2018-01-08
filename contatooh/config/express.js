// config/express.js
var express = require('express');
//var home = require('../app/routes/home'); com o express load isso aqui não é mais necessário
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    
    var app = express();
    
    // variável de ambiente
    app.set('port', 3000);
    
    // middleware
    app.use(express.static('./public'));
    
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    /*middleware abaixo são para method override. Usando POST e fazendo overrive
    para interpretar o DELETE e PUT */
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    
    // abaixo da configuração do último middleware
    //home(app);
    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
};