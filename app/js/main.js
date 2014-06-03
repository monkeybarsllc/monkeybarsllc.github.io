app = angular.module('MonkeyBarsHome', []);


app.config(['$interpolateProvider', function($interpolateProvider) {

  return $interpolateProvider.startSymbol('{(').endSymbol(')}');

}]);


app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.events = [
    {
      name: 'Re-Imagination Challenge',
      date: '3/29/14 - 3/30/14',
      description: 'Put the money where your mouth is and create some innovative ideas to change the face of IIT. Get a team together to improve our school in this Hackathon style challenge. ',
      logo: '/img/events/reimagination.png'
    },
    {
      name: 'Gogo Hackathon',
      date: '2/22/14 - 2/23/14',
      description: 'Generate a product or idea that helps air travelers stay connected to the things they care about most - loved ones, entertainment, or work.',
      logo: '/img/events/gogo.png'
    },
    {
      name: 'The Forge',
      date: '10/26/13 - 10/27/13',
      description: 'Celebrate Chicago’s emergence as a global innovation hub by taking part in the action at the Idea Shop.',
      logo: '/img/events/forge.png'
    }
  ];

}]);