var app = angular.module('pokemon', ['ui.router', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('home', {
      url: '/pokemon',
      controller: 'mainCtrl'
    })
    .state('poke-view', {
      url: '/poke-view',
      templateUrl: 'poke-views/poke-modal.html',
      //controller: 'aboutCtrl'
    });
});
