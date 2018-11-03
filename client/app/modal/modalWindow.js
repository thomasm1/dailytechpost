(function () {
  'use strict';

 
   angular.module('app')
       .controller('modalWindow',[modalWindow]);

  function modalWindow() {
     var vm = this;

     vm.activate = activate;

     activate();

     function activate() { 


       $("#cal").kendoCalendar({
          value: new Date(2018, 0 , 1)
       });
 
     }
  }
})();