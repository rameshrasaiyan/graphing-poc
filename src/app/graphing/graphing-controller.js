(function () {
  'use strict';
  angular
    .module('graphingPoc.graphing', ['googlechart'])
    .controller('GraphingCtrl', function ($scope, $interval) {
      $scope.date = { min: null, max: null };
      $scope.$on('date-change', function (e, data) {
        console.log(data);
        $scope.date.min = data.values.min;
        $scope.date.max = data.values.max;
        copyRows(data.values.min.getMonth(), data.values.max.getMonth());
      });
      var sourceRows = [];
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      for (var i = 0; i < 12; i++) {
        sourceRows.push({
          c: [
            {
              v: monthNames[i]
            },
            {
              v: Math.round(Math.random() * 24)
            },
            {
              v: Math.round(Math.random() * 24)
            },
            {
              v: Math.round(Math.random() * 24)
            },
            {
              v: Math.round(Math.random() * 24)
            }
          ]
        });
      }
      function copyRows(start, end) {
        $scope.chartObject.data.rows = [];
        for (var i = start; i <= end; i++) {
          $scope.chartObject.data.rows.push(sourceRows[i]);
        }
      }
      $scope.chartObject = {
        "type": "AreaChart",
        "displayed": true,
        "data": {
          "cols": [
            {
              "id": "month",
              "label": "Month",
              "type": "string",
              "p": {}
            },
            {
              "id": "laptop-id",
              "label": "Laptop",
              "type": "number",
              "p": {}
            },
            {
              "id": "desktop-id",
              "label": "Desktop",
              "type": "number",
              "p": {}
            },
            {
              "id": "server-id",
              "label": "Server",
              "type": "number",
              "p": {}
            },
            {
              "id": "cost-id",
              "label": "Shipping",
              "type": "number"
            }
          ],
          "rows": []
        },
        "options": {
          "title": "Sales per month",
          "isStacked": "true",
          "fill": 20,
          "displayExactValues": true,
          "vAxis": {
            "title": "Sales unit",
            "gridlines": {
              "count": 10
            }
          },
          "hAxis": {
            "title": "Date"
          }
        },
        "formatters": {}
      };
    });
}());
