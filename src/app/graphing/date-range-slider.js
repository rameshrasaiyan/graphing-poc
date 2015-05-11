(function () {
  'use strict';
  angular
    .module('graphingPoc.graphing')
    .directive('dateRangeSlider', function () {
      return {
        scope: {
          startDate: '=',
          endDate: '='
        },
        templateUrl: '/graphing/date-range-slider.html',
        controller: function ($scope, $element) {
          function templateLoaded() {
            var start = typeof $scope.startDate !== 'object' ? new Date($scope.startDate) : $scope.startDate,
              end = typeof $scope.endDate !== 'object' ? new Date($scope.endDate) : $scope.endDate,
              today = new Date();
            //today.setDate(today.getDate() - 1);
            // Fix for ambiguous datetime parsing
            if ($scope.startDate !== 'object') {
              start.setDate(start.getDate() + 1);
            }
            if ($scope.endDate !== 'object') {
              end.setDate(end.getDate() + 1);
            }
            var defaultVals = {
              min: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
              max: new Date(today.getFullYear(), today.getMonth(), today.getDate())
            };
            $scope.$emit('date-change', { values: defaultVals });
            $($element)
              .dateRangeSlider({
                arrows: true,
                bounds: {
                  min: start,
                  max: end
                },
                defaultValues: defaultVals,
                step: {
                  days: 1
                }
              })
              .bind('valuesChanged', function (e, data) {
                $scope.$emit('date-change', data);
                if (!$scope.$$phase) {
                  $scope.$apply();
                }
              });
          }
          templateLoaded();
        }
      };
    });
}());
