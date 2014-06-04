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
      logo: '/img/events/reimagination.png',
      social: {
        eventbrite: 'http://www.eventbrite.com/e/the-re-imagination-challenge-tickets-10859604369',
        facebook: 'https://www.facebook.com/events/221841218013032/',
        youtube: 'https://www.youtube.com/user/MonkeyBarsCommunity/playlists'
      }
    },
    {
      name: 'Gogo Hackathon',
      date: '2/22/14 - 2/23/14',
      description: 'Generate a product or idea that helps air travelers stay connected.',
      logo: '/img/events/gogo.png',
      social: {
        eventbrite: 'http://www.eventbrite.com/e/gogo-hackathon-tickets-8579815459',
        facebook: 'https://www.facebook.com/events/1443211745907777/',
        youtube: 'https://www.youtube.com/playlist?list=PL53uXvzoXmROt8unzhHpz54rvJMqXsura'
      }
    },
    {
      name: 'The Forge',
      date: '10/26/13 - 10/27/13',
      description: 'Celebrate Chicago’s emergence as a global innovation hub.',
      logo: '/img/events/forge.png',
      social: {
        eventbrite: 'http://www.eventbrite.com/e/monkeybars-presents-the-forge-hackathon-tickets-8225517745',
        facebook: 'https://www.facebook.com/events/1449013238657677/',
        youtube: 'https://www.youtube.com/user/MonkeyBarsCommunity/playlists'
      }
    }
  ];

}]);