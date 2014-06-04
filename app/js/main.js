app = angular.module('MonkeyBarsHome', []);


app.config(['$interpolateProvider', function($interpolateProvider) {

  return $interpolateProvider.startSymbol('{(').endSymbol(')}');

}]);


app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.events = [
    {
      name: 'Re-Imagination Challenge',
      date: '3/29/14 - 3/30/14',
      description: 'Get a team together to improve IIT.',
      logo: '/img/events/reimagination.png'
    },
    {
      name: 'Gogo Hackathon',
      date: '2/22/14 - 2/23/14',
      description: 'Generate a product or idea that helps air travelers stay connected.',
      logo: '/img/events/gogo.png'
    },
    {
      name: 'The Forge',
      date: '10/26/13 - 10/27/13',
      description: 'Celebrate Chicago’s emergence as a global innovation hub.',
      logo: '/img/events/forge.png'
    }
  ];

}]);