(function () {

  'use strict';

  angular
  .module('app.home.directive', [])
  .directive('home', home);

  home.$inject = [];

  function home() {

    return {
      templateUrl: 'app/home/home.html',
      restrict: 'E'
    };

  } // end directive

})();
