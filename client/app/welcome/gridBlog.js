(function () {
   'use strict';
   angular.module('app')
      .controller('gridBlog',
      [gridBlog]);

               
   function gridBlog() {
      var vm = this;
      vm.activate = activate;
      vm.computerChosen = false;

      activate();

      function activate(){

  
            $('#grid').kendoGrid({
              dataSource: { 
                 //   data: vm.blogs,
                 transport: {
                    type: JSON,
                      read: "http://localhost:4000/api/blogs"
                  },
                  pageSize: 10
              },
              height: 550,
              groupable: true,
              sortable: true,
              pageable: {
                  refresh: true,
                  pageSizes: true,
                  buttonCount: 5
              },
              columns: [{
                  // template: "<div class='main'" +
                  // "style='background-image: url(../content/web/Customers/#:data.CustomerID#.jpg);'></div>" +
                  // "<div class='customer-name'>#: ContactName #</div>",
                  
                  field: "cat3",
                  title: "Category",
                  width: 120
              }, {
                  field: "title",
                  title: "Title"
              }, {
                  field: "blogcite",
                  title: "Citations"
              }, {
                  field: "date",
                  width: 80
              }]
            });

         vm.computerOptions = {
            dataSource: {
              transport: {
                type: JSON,
                read: "http://localhost:4000/api/blogs"
            },
            pageSize: 10
            },
            dataTextField: "title",
            dataValueField: "id",
            optionLabel: "Select a blog..."
         };

         vm.computerChange = function(e){
            console.log(e.sender.text())
            vm.computerChosen = true;
            if (e.sender.text() == "Select a computer..."){
               vm.computerChosen = false;
            }
         }
      }

   }



})();