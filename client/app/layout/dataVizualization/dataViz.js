(function () {
   'use strict';


   // get the app module
   angular.module('app')
      .controller('dataViz',
      [dataViz]);

   function dataViz() {
      var vm = this;
      vm.activate = activate;

      activate();

      function activate() {

         vm.salesData = [
            {sales: 400}, {sales: 800},
            {sales: 1200}, {sales: 1400}
         ]


         vm.ytdSalesChartOptions = {
            dataSource: {data: vm.salesData},
            series: [{field:"sales", type:"pie"}],
            seriesDefaults: {labels:{visible: true, format:"{0}"}},
            title: "Overall sales"
         };

         vm.salesChartOptions = {
            dataSource: {
               transport: {
                 read: {
                    url: "app/dataVizualization/sales.json",
                    dataType: "json"
                 }
               }
            },
            series: [{field:"sales", type: 'donut'}],
            title: "Sales by Product"
         };


         }
   }
})();