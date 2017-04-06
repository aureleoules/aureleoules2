import angular from 'angular';
import Home from './home/home';
import Contact from './contact/contact';
import Projects from './projects/projects';
let componentModule = angular.module('app.components', [
  Home,
  Contact,
  Projects
])

.name;

export default componentModule;
