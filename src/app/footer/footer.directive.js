(function () {

  'use strict';

  angular
  .module('app.footer.directive', [])
  .directive('footer', footer);

  footer.$inject = [];

  function footer() {

    return {
      templateUrl: 'app/footer/footer.html',
      restrict: 'E'
    };

  } // end directive

})();
