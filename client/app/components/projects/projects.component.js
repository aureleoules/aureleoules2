import template from './projects.html';
import controller from './projects.controller';

let projectsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ["$scope", "$http", controller]
};

export default projectsComponent;
