// public/js/controllers/ContatosController.js
angular.module('contatooh').controller('ContatosController', function($scope) {

    $scope.total = 0;

    // Object
	$scope.contato = {
		nome: 'Flávio Henrique',
		sobrenome: 'Souza Almeida'
	};
	
	// boolean
	$scope.exibir = true;
	
	// Number
	$scope.salario = 100.12;
	
	// Date
    $scope.admissao = new Date();
    
    $scope.incrementa = function(){
        $scope.total++;
    }

});