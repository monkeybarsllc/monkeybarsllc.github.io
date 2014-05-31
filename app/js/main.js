app = angular.module('MonkeyBarsHome', []);


app.config(['$interpolateProvider', function($interpolateProvider) {

  return $interpolateProvider.startSymbol('{(').endSymbol(')}');

}]);


app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.events = [
    {
      name: 'Some Event Name',
      description: 'Some description'
    },
    {
      name: 'Some Other Event Name',
      description: 'Some other description'
    },
    {
      name: 'Some New Event',
      description: 'Some other new description'
    }
  ];

}]);