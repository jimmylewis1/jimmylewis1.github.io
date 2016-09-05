var app=angular.module('mainApp', ['ui.router', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
     templateUrl: 'home.html'
     //  controller: 'indexCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about-me.html'
      // controller: 'indexCtrl'
    })
    .state('web-dev', {
      url: '/web-dev',
      templateUrl: 'web-dev.html'
      // controller: 'indexCtrl'
    })
    .state('work-history', {
      url: '/work-history',
      templateUrl: 'work-history.html'
      // controller: 'projectsCtrl'
    })
    .state('pokemon', {
      url: '/pokemon',
      templateUrl: 'pokemon.html'
      //controller: ''
    })
});
