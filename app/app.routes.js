(function () {
  'use strict'

  angular
  .module('app.routes', ['ui.router'])
  .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  /** @ngInject */
  function config ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
    .state({
      name: 'main',
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    $urlRouterProvider.otherwise('/')
  }
})()
