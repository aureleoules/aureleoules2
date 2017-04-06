import angular from 'angular';
import uiRouter from 'angular-ui-router';
import projectsComponent from './projects.component';

let projectsModule = angular.module('projects', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('projects', {
      url: '/projects',
      component: 'projects'
    });
})

.component('projects', projectsComponent)
  
.name;

export default projectsModule;
