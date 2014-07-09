app = angular.module('MonkeyBarsHome', []);


app.config(['$interpolateProvider', function($interpolateProvider) {

  return $interpolateProvider.startSymbol('{(').endSymbol(')}');

}]);


app.controller('AboutCtrl', ['$filter', '$http', '$scope', function($filter, $http, $scope) {

  $http.get('/team/members.json')
    .success(function(data) {
      $scope.team = data;
    });

}]);

app.controller('EventCtrl', ['$http', '$scope', function($http, $scope) {

  $scope.getData = function(data) {
    $http.get('/events/' + data + '.json')
      .success(function(data) {
        $scope.event = data;
      });
  };

}]);

app.controller('FaqCtrl', ['$http', '$scope', function($http, $scope) {

  $http.get('/faq/questions.json')
    .success(function(data) {
      $scope.questions = data;
    });

}]);

app.controller('HomeCtrl', ['$http', '$scope', function($http, $scope) {

  $http.get('/events/events.json')
    .success(function(data) {
      $scope.events = data;
    });

}]);

app.controller('ProfileCtrl', ['$http', '$scope', function($http, $scope) {

  $scope.getData = function(data) {
    $http.get('/team/' + data + '.json')
      .success(function(data) {
        $scope.member = data;
      });
  };

}]);