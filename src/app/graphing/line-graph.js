(function () {
  'use strict';
  angular
    .module('graphingPoc.graphing')
    .directive('lineGraph', function () {
      return {
        templateUrl: '/graphing/line-graph.html',
        controller: function ($scope, $element) {
          function templateLoaded() {
            google.load('visualization', '1', {packages:['corechart']});
            google.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ['Year', 'Sales', 'Expenses'],
                ['2013',  1000,      400],
                ['2014',  1170,      460],
                ['2015',  660,       1120],
                ['2016',  1030,      540]
              ]);

              var options = {
                title: 'Company Performance',
                hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
                vAxis: {minValue: 0}
              };

              var chart = new google.visualization.AreaChart($element);
              chart.draw(data, options);
            }
          }
          templateLoaded();
        },
        link: function (scope, elem) {

        }
      };
    });
}());
