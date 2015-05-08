(function () {
  'use strict';
  angular
    .module('graphingPoc.graphing')
    .directive('dateRangeSlider', function () {
      return {
        templateUrl: '/graphing/date-range-slider.html',
        controller: function ($scope, $element) {
          function templateLoaded() {
            var today = new Date();
            today.setDate(today.getDate() - 1);
            var start = {
              min: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
              max: new Date(today.getFullYear(), today.getMonth(), today.getDate())
            };
            $scope.$emit('date-change', { values: start });
            $($element)
              .dateRangeSlider({
                arrows: true,
                bounds: {
                  min: new Date(today.getFullYear(), 0, 1),
                  max: new Date(today.getFullYear(), today.getMonth(), today.getDate())
                },
                defaultValues: start,
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
        },
        link: function (scope, elem) {

        }
      };
    });
}());
