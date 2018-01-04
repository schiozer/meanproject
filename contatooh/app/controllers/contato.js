
// app/controllers/contatos.js
module.exports = function() {

    var contatos = [
        {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
        {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
        {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
    ];

    var controller = {};
    
    controller.listaContatos = function(req, res) {
        //console.log('bad..');
        res.json(contatos);
    };
    
    return controller;
};