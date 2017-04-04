'use strict';

// Defining Angular app model with all other dependent modules
var Roll4Guild = angular.module('Roll4Guild',["ngRoute"]);

Roll4Guild.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('components/views/aboutUs', {
            templateUrl: '/components/views/aboutUs.html',
            controller: 'aboutCtrl'
        })
        .when('components/views/contactUs', {
            templateUrl: '/components/views/contactUs.html',
            controller: 'contactCtrl'
        })
        .when('components/views/editProfile', {
            templateUrl: '/components/views/editProfile.html',
            controller: 'editProfCtrl'
        })
        .when('components/views/groupProfile', {
            templateUrl: '/components/views/groupProfile.html',
            controller: 'groupProfCtrl'
        })
        .when('components/views/groupWall', {
            templateUrl: '/components/views/groupWall.html',
            controller: 'groupWallCtrl'
        })
        .when('components/views/resetPasswordNew', {
            templateUrl: '/components/views/restPasswordNew.html',
            controller: 'passNewCtrl'
        })
        .when('components/views/resetPasswordVerify', {
            templateUrl: '/components/views/resetPasswordVerify.html',
            controller: 'passVerCtrl'
        })
        .when('components/views/searchScreen', {
            templateUrl: '/components/views/searchScreen.html',
            controller: 'aboutCtrl'
        })
        .when('components/views/userProfile', {
            templateUrl: '/components/views/userProfile.html',
            controller: 'userProfCtrl'
        })
        .when('components/views/userWall', {
            templateUrl: '/components/views/userWall.html',
            controller: 'userWallCtrl'
        })
})

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
    .controller('userProfCtrl', function($scope, $routeParams) {
        $scope.name = 'userProfCtrl';
        $scope.params = $routeParams;
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