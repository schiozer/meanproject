// public/js/controllers/ContatosController.js
angular.module('contatooh').controller('ContatosController', function ($scope, $resource) {

	$scope.filtro = '';

	$scope.total = 0;
	
	$scope.mensagem = {texto: ''};

	// Object
	$scope.contatos = [];
	/*
	[
		{
			"_id": 1,
			"nome": "Contato Angular 1",
			"email": "cont1@empresa.com.br"
		},
		{
			"_id": 2,
			"nome": "Contato Angular 2",
			"email": "cont2@empresa.com.br"
		},
		{
			"_id": 3,
			"nome": "Contato Angular 3",
			"email": "cont3@empresa.com.br"
		}
	];
	*/
	$scope.total = 0;
	$scope.filtro = '';
	/*
	$scope.incrementa = function() {
		$scope.total++;
	};

	//$http.get('/contatos')
	$resource.get('/contatos')
		.success(function(data) {
			$scope.contatos = data;
		})
		.error(function(statusText) {
			console.log("Não foi possível obter a lista de contatos");
			console.log(statusText);
		});
	*/

	var Contato = $resource('/contatos/:id');

	function buscaContatos() {
		
		Contato.query(
			function(contatos) {
				$scope.contatos = contatos;
			},
			function(erro) {
				console.log("Não foi possível obter a lista de contatos");
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível obter a lista'
				};
			}
		);
	}

	buscaContatos();

	$scope.remove = function(contato) {
		

		Contato.delete({id: contato._id},
			buscaContatos,
			function(erro) {
				console.log('Não foi possível remover o contato');
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível remover o contato'
				};
			}
		);
		/*
		Ou 

		var promise = Contato.delete({id: contato._id}).$promise;

		promise
			.then(buscaContatos)
			.catch(function(erro) {
				console.log("Não foi possível remover o contato");
				console.log(erro);
			});
		*/
	};

	
});