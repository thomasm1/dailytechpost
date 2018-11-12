(function () {
  'use strict';

   angular.module('app')
       .controller('d3Controller',[d3Controller]);

  function d3Controller() {
    
    var d3Controller = function ($scope)
{
  $scope.currentAmounts = {
    label: 'Now', a: 0, b: 0, c: 0
  };
  
  $scope.previousAmounts = [
    {label: 'Old', a: 1, b: '', c: 1},
    {label: 'Older', a: 2, b: '', c: 2},
    {label: 'Oldest', a: 3, b: 3, c: 3}
  ];
    
  $scope.chartSeries = function(propertyName) {
    return [{label: $scope.currentAmounts.label, amount: $scope.currentAmounts[propertyName]}]
      .concat(
        _.map($scope.previousAmounts, function(amounts) {
          return {label: amounts.label, amount: amounts[propertyName]};
        })
      );
  }; 
} 
}
})();