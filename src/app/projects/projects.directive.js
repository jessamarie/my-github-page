(function () {

  'use strict';

  angular
  .module('app.projects.directive', [])
  .directive('projects', projects);

  projects.$inject = [];

  function projects() {

    return {
      templateUrl: 'app/projects/projects.html',
      restrict: 'E'
    };

  } // end directive

})();
