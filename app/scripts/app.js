'use strict';

// Defining Angular app model with all other dependent modules
var Roll4Guild = angular.module('Roll4Guild',["ngRoute"]);

Roll4Guild
    .controller('loginCtrl', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    .controller('aboutCtrl', function($scope, $routeParams) {
        $scope.name = 'aboutCtrl';
        $scope.params = $routeParams;
    })
    .controller('contactCtrl', function($scope, $routeParams) {
        $scope.name = 'contactCtrl';
        $scope.params = $routeParams;
    })
    .controller('userProfCtrl', function($scope, $routeParams, $http) {
        $scope.name = 'userProfCtrl';
        $scope.params = $routeParams;

        $scope.init = function () {
            $http.get("http://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };


    })
    .controller('searchCtrl', function($scope, $routeParams) {
        $scope.name = 'searchCtrl';
        $scope.params = $routeParams;
    })
    .controller('passNewCtrl', function($scope, $routeParams) {
        $scope.name = 'passNewCtrl';
        $scope.params = $routeParams;
    })
    .controller('passVerCtrl', function($scope, $routeParams) {
        $scope.name = 'passVerCtrl';
        $scope.params = $routeParams;
    })
    .controller('inboxCtrl', function($scope, $routeParams) {
        $scope.name = 'inboxCtrl';
        $scope.params = $routeParams;
		$scope.findPigeons = function(){
		}
		$scope.init = function(){
			$scope.conversation = ['Frodo'];
			// $scope.conversation = getConversations(['Frodo'])[0];
		}
		$scope.getConversations = function(conversants){

		}
		// $scope.conversation=['Frodo', 'Gimli'];
		$scope.listNames = function(){
			return $scope.conversation.join(', ');
		}
		$scope.messages=[
			{sender:'Frodo', body:'Over hill and under tree', date:'Mar. 15'},
			{sender:'Gimli', body:'Salted pork!!!', date:'Mar. 17'},
			{sender:'Gandalf', body:'Follow your nose', date:'Mar. 17'},
			{sender:'Legolas', body:'They\'re taking the hobbits to Isengard!', date:'Mar. 19'},
		];
		$scope.contacts=[
			{name:'Frodo', uhid:'000'},
			{name:'Legolas', uhid:'001'},
			{name:'Gimli', uhid:'002'},
			{name:'Gandalf', uhid:'003'},
		];
    })
    .controller('userWallCtrl', function($scope, $routeParams) {
        $scope.name = 'userWallCtrl';
        $scope.params = $routeParams;
    })
    .controller('groupProfCtrl', function($scope, $routeParams) {
        $scope.name = 'groupProfCtrl';
        $scope.params = $routeParams;
    })
    .controller('groupWallCtrl', function($scope, $routeParams) {
        $scope.name = 'groupWallCtrl';
        $scope.params = $routeParams;
    })
    .controller('editProfCtrl', function($scope, $routeParams) {
        $scope.name = 'editProfCtrl';
        $scope.params = $routeParams;
    })
