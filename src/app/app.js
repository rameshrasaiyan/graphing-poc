(function () {
  'use strict';
  angular.module('graphingPoc', [
    'ngRoute',
    'graphingPoc.graphing'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/graphing', {
          controller: 'GraphingCtrl',
          templateUrl: '/graphing/graphing.html'
        })
        .otherwise({
          redirectTo: '/graphing'
        });
    });
}());
