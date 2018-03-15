

angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        
        $routeProvider.when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
            });

        $routeProvider.when('/contato/:contatoId', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
            });

        $routeProvider.when('/contato', { // para cadastrar um contato
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
            });
    
        $routeProvider.otherwise({redirectTo: '/contatos'});
    }
);