'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);


angular.module('BlurAdmin')
  .run(function($rootScope, $location, $stateParams) {
    $rootScope.showSideBar = true;

    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      // Look at $location.path()
      // If it isn't what you want, toggle showSideBar...
      // $rootScope.showSideBar = true|false;
    });
  });
