(function () {

  'use strict';

  angular
  .module('app.contact.directive', [])
  .directive('contact', contact);

  contact.$inject = [];

  function contact() {

    return {
      templateUrl: 'app/contact/contact.html',
      restrict: 'E'
    };

  } // end directive

})();
