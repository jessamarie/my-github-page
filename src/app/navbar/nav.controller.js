(function () {

  'use strict';

  angular
  .module('app.nav.controller', [])
  .controller('NavController', NavController);

  NavController.$inject = [];

  function NavController() {

    var vm = this;

    vm.menu = [
      {
        route: 'home',
        title: 'Home',
        icon: '' // change these
      },
      {
        route: 'skills',
        title: 'Skills',
        icon: ''
      },
      {
        route: 'projects',
        title: 'Projects',
        icon: ''
      },
      {
        route: 'links',
        title: 'Links',
        icon: ''
      }
    ];

    var len = vm.menu.length;
    var mid = len / 2;
    vm.left = vm.menu.slice(0, mid);
    vm.right = vm.menu.slice(mid, len);

  }

})();
