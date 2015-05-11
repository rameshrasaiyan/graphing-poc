(function () {
  'use strict';
  angular
    .module('graphingPoc.graphing')
    .directive('dateLineGraph', function () {
      return {
        scope: {
          graphData: '=',
          graphXKey: '=',
          graphYKeys: '=',
          graphLabels: '='
        },
        templateUrl: '/graphing/date-line-graph.html',
        controller: function ($scope, $element) {
          var m = null;
          function templateLoaded() {
            m = new Morris.Line({
              element: $element,
              data: $scope.graphData,
              xkey: $scope.graphXKey,
              ykeys: $scope.graphYKeys,
              ymin: 'auto',
              ymax: 'auto',
              labels: $scope.graphLabels,
              resize: true,
              dateFormat: function (x) {
                var d = new Date(x);
                return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
              }
            });
          }
          templateLoaded();
          $scope.$watch('graphData', function () {
            m.setData($scope.graphData);
          });
        }
      };
    });
}());
