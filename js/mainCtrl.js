var app = angular.module('pokemon');

app.controller('mainCtrl', function($scope, mainService) {
  $scope.getPokemon = function() {
    mainService.getPokemon().then(function(response) {
      $scope.pokemon = response.data;
      console.log(data);
    });
  }
  $scope.getPokemon();
  $scope.searchInit = function () {

  }
});