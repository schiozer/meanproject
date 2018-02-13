
module.exports = function() {
    
    var controller = {};
    
    /*
    Adicionamos no objeto controller a propriedade index, que armazena uma função comdois parâmetros: o primeiro, o objeto que representa o
    fluxo da requisição; o segundo, o de resposta. É através do objeto res que enviaremos a página index.ejs:
    */
    controller.index = function(req, res) {

        res.render('index', {nome: 'Testando Nodemon'});
        // aqui estamos dizendo qual página e os dados que irão com ela
        // Por padrão, ele adiciona o sufixo .ejs
        // isso é tudo feito pelas linhas abaixo, que esão no arquivo de configuração express.js
        //    app.set('view engine', 'ejs');
        //    app.set('views','./app/views');

    };
    
    return controller;
}