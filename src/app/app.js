
angular.module('graphingPoc', [
  'ngRoute',
  'graphingPoc.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/graphing-poc/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
