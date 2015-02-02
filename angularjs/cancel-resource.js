<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Session</title>
  <style type="text/css">
    .ng-cloak { display: none; }
  </style>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular-resource.js"></script>
  <script>
angular.module("app", ["ngResource"]).
factory(
  "services",
  [
    "$resource", "$q",
    function($resource, $q)
    {
      return $resource(

        "http://md5.jsontest.com/",
        {},
        {
          MD5:
          {
            method: "GET",
            params: { text: null },

            then: function(resolve)
            {
              if (this.params.$timeoutFn)
              {
                var defer = $q.defer();

                this.timeout = defer.promise;
                this.params.$timeoutFn(defer);
                this.params.$timeoutFn = null;
              }

              this.then = null;
              resolve(this);
            }
          },
        });
    }]).
controller(
  "Test",
  ["services", "$timeout",
  function(services, $timeout)
  {
    this.value = "Sample text";
    this.timeout = 100;

    this.call = function()
    {
      var timeout;
      var timeoutFn = function(defer) { timeout = defer };

      this.result = services.MD5({ text: this.value, $timeoutFn: timeoutFn });
      $timeout(function() { timeout && timeout.resolve(); }, this.timeout);
    }
  }]);
  </script>
</head>
<body ng-app="app" ng-controller="Test as test">
  <label>Text: <input type="text" ng-model="test.value" /></label><br/>
  <label>Timeout: <input type="text" ng-model="test.timeout" /></label><br/>
  <input type="button" value="call" ng-click="test.call()"/>
  <div ng-bind="test.result.md5"></div>
</body>
</html>
