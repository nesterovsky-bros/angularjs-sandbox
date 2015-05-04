(function()
{
  var myPage = 
  {
    templateUrl: "my-page.html",
    transclude: true
  };
  
  angular.module("app").
    directive("myPage", function() { return myPage; });
})();
