(function () {

  'use strict';

  angular
  .module('app.nav.directive', [])
  .directive('navbar', navbar);

  navbar.$inject = [];

  function navbar() {

    return {
      templateUrl: 'app/navbar/navigation.html',
      restrict: 'E',
      controller: 'NavController',
      controllerAs: 'nav'
    };

  } // end directive

})();
