(function () {

  'use strict';

  angular
  .module('app.projects.controller', [])
  .controller('ProjectsController', ProjectsController)
  .filter('ListToMatrix', ListToMatrix);

  ProjectsController.$inject = ['$filter'];
  ListToMatrix.$inject = [];

  function ProjectsController($filter) {

    var vm = this;

    vm.projects = [
      {
        name: 'jessamarie.github.io',
        repo: 'https://github.com/jessamarie/my-github-page',
        ingredients: 'AngularJS, HTML5/CSS',
        description: 'My Portfolio Site'
      },
      {
        name: 'Observatory',
        repo: 'https://github.com/rcos/Observatory3',
        ingredients: 'MongoDB, Express, AngularJS, Node.js',
        description: 'Full stack development as apart of my membership in the' +
                    ' Rensselaer Center of Open Souce Organization.' +
                    ' See rcos.io.'
      },
      {
        name: 'angular1-webpack-starter',
        repo: 'https://github.com/jessamarie/angular1-webpack-starter',
        ingredients: 'AngularJS, HTML5/Less, Webpack, Babel, ES6',
        description: 'Designing an boilerplate with Angular 1.6 and Webpack 2.0'
      },
      {
        name: 'Untitled CMS Project',
        repo: '',
        ingredients: 'MongoDB, Express, AngularJS, Node.js',
        description: 'A developer friendly CMS that will be fully customizable and open source'
      },
      {
        name: 'Operating Systems',
        repo: 'https://github.com/jessamarie/operating-systems',
        ingredients: 'C, Java',
        description: 'A collection of projects from my Operating Systems course.'
      }
    ];

    /*  for future reference/exploration:
    using ng-repeat="item in vm.projects | ListToMatrix:3"
    in projects.html causes infinite looping  */
    vm.filteredProjects = $filter('ListToMatrix')(vm.projects, 3);

  }

  function ListToMatrix() {

    return function (list, elementsPerSubArray) {

      var matrix = [];
      var i;
      var k;

      for (i = 0, k = -1; i < list.length; i++) {

        if (i % elementsPerSubArray === 0) {

          k++;
          matrix[k] = [];

        }

        matrix[k].push(list[i]);

      }

      return matrix;

    };

  }

})();
