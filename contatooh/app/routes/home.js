// app/routes/home.js
var controller = require('../controllers/home')();

module.exports = function(app) {
    // necessário apenas na versão 3.X //app.use(app.router);

    app.get('/', controller.index);
    app.get('/index', controller.index);
}