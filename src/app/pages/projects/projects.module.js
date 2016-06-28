/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.projects', [])
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
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('projects.basic', {
          url: '/basic',
          templateUrl: 'app/pages/projects/basic/tables.html',
          title: 'Basic projects',
          sidebarMeta: {
            order: 10,
          },
        }).state('projects.smart', {
          url: '/smart',
          templateUrl: 'app/pages/projects/smart/tables.html',
          title: 'All Projects',
          sidebarMeta: {
            order: 0,
          },
        });
    $urlRouterProvider.when('/projects','/projects/basic');
  }

})();
