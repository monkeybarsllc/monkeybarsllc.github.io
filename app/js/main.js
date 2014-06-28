app = angular.module('MonkeyBarsHome', []);


app.config(['$interpolateProvider', function($interpolateProvider) {

  return $interpolateProvider.startSymbol('{(').endSymbol(')}');

}]);


app.controller('HomeCtrl', ['$http', '$scope', function($http, $scope) {

  $http.get('/events/events.json')
    .success(function(data) {
      $scope.events = data;
    });

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

app.controller('EventCtrl', ['$http', '$scope', function($http, $scope) {

  $scope.getData = function(data) {
    $http.get('/events/' + data + '.json')
      .success(function(data) {
        $scope.event = data;
      });
  };

}]);