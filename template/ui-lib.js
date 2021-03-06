(function()
{
  
var uiTemplate =
{
  restrict: "AE",
  scope: {},
  controller: function() {},
  link: function(scope, element, attrs, controller, transclude)
  {
    if (!transclude)
    {
      throw new Error("No ancestor directive for transclusion is found.");
    }

    transclude(
      function(clone) { element.append(clone.addClass("ng-cloak")); }).
      remove();
  }
};

var uiDefine =
{
  require: "^^uiTemplate",
  restrict: "A",
  transclude: true,
  scope: { name: "@uiDefine" },
  link: function(scope, element, attrs, controller, transclude)
  {
    var site = controller[scope.name];

    if (site && transclude)
    {
      transclude(function(clone) { site.empty().append(clone); }, site);
    }
  }
};

var uiInsert =
{
  require: "^^uiTemplate",
  restrict: "A",
  scope: { name: "@uiInsert" },
  link: function(scope, element, attrs, controller)
  {
    controller[scope.name] = element;
  }
};

angular.module("uiLib", []).
  directive("uiTemplate", function() { return uiTemplate; }).
  directive("uiDefine", function() { return uiDefine; }).
  directive("uiInsert", function() { return uiInsert; });

})();
