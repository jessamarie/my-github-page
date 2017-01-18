(function () {

  'use strict';

  angular
  .module('app.about.directive', [])
  .directive('about', about);

  about.$inject = [];

  function about() {

    return {
      templateUrl: 'app/about/about.html',
      restrict: 'E'
    };

  } // end directive

})();
