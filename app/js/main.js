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
        var eventDate = new Date($scope.event.start_date)
        var today = new Date();
        if (eventDate >= today)
          $scope.event.active = true;
        else
          $scope.event.active = false;
      });
  };

}]);

app.controller('FaqCtrl', ['$http', '$scope', function($http, $scope) {

  $http.get('/faq/questions.json')
    .success(function(data) {
      $scope.questions = data;
    });

}]);

app.controller('HomeCtrl', ['$filter', '$http', '$scope', function($filter, $http, $scope) {

  $http.get('/events/events.json')
    .success(function(data) {
      $scope.events = data;
    });

  $scope.eventInit = function(event) {
    var eventDate = new Date(event.start_date)
    var today = new Date();
    if (eventDate >= today)
      event.active = true;
    else
      event.active = false;
  };

}]);

app.controller('ProfileCtrl', ['$http', '$scope', function($http, $scope) {

  $scope.getData = function(data) {
    $http.get('/team/' + data + '.json')
      .success(function(data) {
        $scope.member = data;
      });
  };

}]);