AngularJS Directives to model multisite template inclusions
--

In our project we have modeled multi site trasclusion after JSF 2's ui:composition, ui:insert, ui:define (see [ui:composition][1]).

Implementation consists of three simple directives: ui-template, ui-insert, ui-define (see [angularjs-api/template/ui-lib.js][2]).

To define a template one writes the following markup (see [angularjs-api/template/my-page.html][3]):

    <table ui-template>
      <tr>
        <td ui-insert="menu"></td>
      </tr>
      <tr>
        <td ui-insert="content"></td>
      </tr>
    </table>

and declares a directive (see [angularjs-api/template/my-page.js][4]):

      var myPage = 
      {
        templateUrl: "my-page.html",
        transclude: true
      };
  
      angular.module("app").
        directive("myPage", function() { return myPage; });

and finally, to instantiate the directive one needs to write (see [angularjs-api/template/sample.html][5]):

    <my-page>
      <div ui-define="content">
        My content
      </div>
      <div ui-define="menu">
        <a href="#file">File</a>
        <a href="#edit">Edit</a>
        <a href="#view">View</a>
      </div>
    </my-page>

The working sample can be seen through rawgit: [sample.html][6]

See also: [Multisite Transclusion in AngularJS][7]
  [1]: http://docs.oracle.com/javaee/6/javaserverfaces/2.0/docs/pdldocs/facelets/ui/composition.html
  [2]: ui-lib.js
  [3]: my-page.html
  [4]: my-page.js
  [5]: sample.html
  [6]: sample.html
  [7]: http://www.nesterovsky-bros.com/weblog/2015/05/04/MultisiteTransclusionInAngularjs.aspx
