/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.projects.modals')
    .controller('ProjectModalsPageCtrl', ProjectModalsPageCtrl);

  /** @ngInject */
  function ProjectModalsPageCtrl($scope) {

    var vm = this;

     vm.personalInfo = {};
     vm.productInfo = {};
     vm.shipment = {};

     vm.arePersonalInfoPasswordsEqual = function () {
       return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
     };
  }


})();
