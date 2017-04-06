import angular from 'angular';
import uiRouter from 'angular-ui-router';
import skillsComponent from './skills.component';

let skillsModule = angular.module('skills', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('skills', {
      url: '/skills',
      component: 'skills'
    });
})

.component('skills', skillsComponent)
  
.name;

export default skillsModule;
