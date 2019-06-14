(function () {
   'use strict';

    angular.module('app')
        .controller('chartBlog',[chartBlog]);

   function chartBlog() {
      var vm = this;

      vm.activate = activate;

      activate();

      function activate() {



        $("#chart").kendoChart({
            title: {
                text: "Categories"
            },
            legend: {
                position: "bottom"
            },
            seriesDefaults: {
                type: "area",
                area: {
                    line: {
                        style: "smooth"
                    }
                }
            },
            series: [{
                name: "October",
                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
                name: "September",
                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
            }, {
                name: "August",
                data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
            }],
            valueAxis: {
                labels: {
                    format: "{0}%"
                },
                line: {
                    visible: false
                },
                axisCrossingValue: -10
            },
            categoryAxis: {
                categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
                majorGridLines: {
                    visible: false
                },
                labels: {
                    rotation: "auto"
                }
            },
            tooltip: {
                visible: true,
                format: "{0}%",
                template: "#= series.name #: #= value #"
            }
        });

         vm.computers=[
            {name: "Macbook Pro", id:1},
            {name: "Macbook Air", id: 2},
            {name: "Mac Pro", id: 3}
         ]
      }
   }
})();