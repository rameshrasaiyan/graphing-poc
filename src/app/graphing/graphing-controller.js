(function () {
  'use strict';
  angular
    .module('graphingPoc.graphing', [])
    .controller('GraphingCtrl', function ($scope, $interval, GraphData) {
      $scope.graphData = [];
      //var GraphData = [];
      //for (var i = 1; i <= 365; i++) {
      //  var d = new Date(2015, 0, i);
      //  GraphData.push({ date: d.getTime(), valueA: Math.round(Math.random() * 100), valueB: Math.round(Math.random() * 100) } );
      //}
      $scope.$on('date-change', function (e, data) {
        $scope.graphData = [];
        var range = ((data.values.max.getTime() - data.values.min.getTime()) / 86400000);
        if (range > 31) {
          var dates = [];
          GraphData.forEach(function (d) {
            if (d.date >= (data.values.min - 86400000) && d.date <= data.values.max) {
              var dt = new Date(d.date);
              var month = dt.getMonth();
              if (!dates[month]) {
                dates[month] = { date: d.date, valueA: d.valueA, valueB: d.valueB };
              } else {
                dates[month].valueA += d.valueA;
                dates[month].valueB += d.valueB;
              }
            }
          });
          dates.forEach(function (d) {
            $scope.graphData.push(d);
          });
        } else {
          GraphData.forEach(function (d) {
            if (d.date >= (data.values.min - 86400000) && d.date <= data.values.max) {
              $scope.graphData.push(d);
            }
          });
        }
      });
    });
}());
