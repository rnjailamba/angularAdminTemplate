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
    if( ($location.path()).indexOf('/projects') !== -1 ){
      console.log($location.path());
      $rootScope.showSideBar = 0;
    }
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      if( ($location.path()).indexOf('/projects') !== -1 ){
        console.log($location.path());
        $rootScope.showSideBar = 0;
      }

      // Look at $location.path()
      // If it isn't what you want, toggle showSideBar...
      // $rootScope.showSideBar = true|false;
    });
  });
