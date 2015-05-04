(function()
{
  var myPage = 
  {
    templateUrl: "page.html",
    transclude: true
  };
  
  angular.module("app").
    directive("myPage", function() { return myPage; });
})();
