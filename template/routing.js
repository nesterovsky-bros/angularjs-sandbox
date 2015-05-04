angular.module("app").config(
[
  "$routeProvider",
  function($routeProvider)
  {
    $routeProvider.
      when("/page1", { templateUrl: "page1.html" }).
      when("/page2", { templateUrl: "page2.html" }).
      otherwise("/page1");
  }
]);
