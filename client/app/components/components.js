import angular from 'angular';
import Home from './home/home';
import Projects from './projects/projects';
import Skills from './skills/skills';
let componentModule = angular.module('app.components', [
  Home,
  Projects,
  Skills
])

.name;

export default componentModule;
