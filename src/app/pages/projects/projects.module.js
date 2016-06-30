/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.projects', [
    'BlurAdmin.pages.projects.modals' 
  ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('projects', {
          url: '/projects',
          template : '<ui-view></ui-view>',
          abstract: true,
          controller: 'ProjectsPageCtrl',
          title: 'Projects',

        }).state('projects.basic', {
          url: '/basic',
          templateUrl: 'app/pages/projects/basic/tables.html',
          title: 'Basic projects',

        }).state('projects.smart', {
          url: '/smart',
          templateUrl: 'app/pages/projects/smart/tables.html',
          title: 'All Projects',

        });
    $urlRouterProvider.when('/projects','/projects/basic');
  }

})();
