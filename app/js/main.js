app = angular.module('MonkeyBarsHome', []);


app.config(['$interpolateProvider', function($interpolateProvider) {

  return $interpolateProvider.startSymbol('{(').endSymbol(')}');

}]);


app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.events = [
    {
      name: 'Re-Imagination Challenge',
      date: '3/29/14 - 3/30/14',
      brief: 'Get a team together to improve IIT.',
      link: '/events/re-imagination-challenge.html',
      logo: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/events/re-imagination-challenge/logo.png',
      quote: {
        description: 'Some awesome quote about this event',
        source: 'Some Person, Some Title'
      }
    },
    {
      name: 'Gogo Hackathon',
      date: '2/22/14 - 2/23/14',
      brief: 'Generate a product or idea that helps air travelers stay connected.',
      link: '/events/gogo-hackathon.html',
      logo: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/events/gogo-hackathon/logo.png',
      quote: {
        description: 'Some awesome quote about this event',
        source: 'Some Person, Some Title'
      }
    },
    {
      name: 'The Forge',
      date: '10/26/13 - 10/27/13',
      brief: 'Celebrate Chicago’s emergence as a global innovation hub.',
      link: '/events/the-forge.html',
      logo: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/events/the-forge/logo.png',
      quote: {
        description: 'Some awesome quote about this event',
        source: 'Some Person, Some Title'
      }
    }
  ];

}]);

app.controller('AboutCtrl', ['$filter', '$scope', function($filter, $scope) {

  $scope.selectedProfile = null;

  $scope.team = [
    {
      name: 'Taylor Harvey',
      title: 'Co-Founder | Social Engineer',
      pic: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/profile-pics/taylor.png',
      bio: '/team/taylor-harvey.html'
    },
    {
      name: 'Emmanuel Marcha',
      title: 'Co-Founder | Developer',
      pic: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/profile-pics/manny.png',
      bio: '/team/emmanuel-marcha.html'
    },
    {
      name: 'Rani Shah',
      title: 'Strategy Engineer',
      pic: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/profile-pics/rani.png',
      bio: '/team/rani-shah.html'
    },
    {
      name: 'Van Mac',
      title: 'Logistics',
      pic: 'https://dl.dropboxusercontent.com/u/11622340/MonkeyBars/profile-pics/van.png',
      bio: '/team/van-mac.html'
    }
  ]

  $scope.selectProfile = function(member) {
    $scope.selectedProfile = ($filter('filter')($scope.team, member))[0];
  };

}]);