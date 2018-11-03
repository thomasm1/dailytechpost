(function () {
   'use strict';


   // get the app module
   angular.module('app')
      .controller('order',
      ['$timeout',order]);

   function order($timeout) {
      var vm = this;
      var selectionIds=[];
      vm.comments = "";
      vm.submitOrderClick = submitOrderClick;
      vm.status="Ready";
      vm.runProgressBar = runProgressBar;
      vm.statusLabels = [
         "Validating order",
         "Validating credit",
         "Checking inventory",
         "Creating work order",
         "Finalizing work order",
         "Order entered"
      ];
      vm.orderProgress = 0;

      vm.activate = activate;

      activate();

      var i = 0;
      function runProgressBar(){
         i += 5;
         vm.orderProgress = i;
         vm.status = vm.statusLabels[Math.floor(i/20)];
         $timeout(runProgressBar, 400);
      }


      function submitOrderClick(){
         vm.runProgressBar();
      }

      function activate() {
         vm.computerOptions = {
            dataSource: {
               data: [
                  {name: "MacBook", id: 1001},
                  {name: "MacBook Pro", id: 1010},
                  {name: "Mac Mini", id: 2001},
                  {name: "Mac Pro", id: 4010},
                  {name: "iMac", id: 4050}
               ]
            },
            dataTextField: "name",
            dataValueField: "id",
            optionLabel: "Select a model..."
         };

         vm.RAMOptions = {
            min: 4,
            max: 32,
            smallStep: 4,
            largeStep: 4,
            orientation: 'horizontal',
            value: 8
         };

         vm.selectOptions = {
            placeholder: "Select options...",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            autoBind: false,
            dataSource: {
               type: "odata",
               serviceFiltering: true,
               transport: {
                  read: {
                     url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
                  }
               }
            }
         };

         vm.deliveryDatePickerOptions = {
            format: 'MM/dd',
            start: 'month',
            value: new Date(2014,6,10),
            change: "notification1.show('Date verified', 'error')"
         };


      }
   }
})();

