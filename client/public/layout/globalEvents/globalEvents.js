function GlobalEvents($scope) {
   $scope.treeOptions = {
      dataSource: makeData(),
      checkboxes: {
         template: "<input type='checkbox' ng-model='dataItem.checked' />"
      }
   };

   $scope.$on("kendoWidgetCreated", function (event, widget) {
      if (widget === $scope.treeWidget) {
         widget.element.find(".k-checkbox input:checked").each(function () {
            widget.expand($(this).parents(".k-item"));
         });
      }
   });

   function makeData(){
      return [
         { text: "Memory", items: [
            { text: "Chips", items: [
               { text: "8 GB DDR", checked: true },
               { text: "8 GB DDR", checked: true }]},
            { text: "Manufacturer", items: [
               { text: "Acme Widgets", checked: true },
               { text: "Foo Chips" },
               { text: "Fish & Chips" }]},
            { text: "Speed", items: [
               { text: "100ms" },
               { text: "500ms", checked: true },
               { text: "1200ms" }]}]},
         { text: "Storage", checked: true, items: [
            { text: "Flash Drive", items: [
               { text: "256 GB" },
               { text: "500 GB" },
               { text: "1 TB", checked: true }]},
            { text: "Standard Drive", items: [
               { text: "1 TB" },
               { text: "2 TB" },
               { text: "4 TB" }]},
            { text: "External", items: [
               { text: "1 TB USB" },
               { text: "2 TB USB" },
               { text: "8 TB Lightning", checked: true }]}]},
         { text: "CD/DVD", items: [
            { text: "CD", items: [
               { text: "CD RO" },
               { text: "CD RW" },
               { text: "CD RWX" }]},
            { text: "DVD", items: [
               { text: "DVD RO" },
               { text: "DVD RW" },
               { text: "DVD RWX" }]},
            { text: "Combo", items: [
               { text: "R" },
               { text: "RW" },
               { text: "RWX" }]}]}
      ]
   }

}