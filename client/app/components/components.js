import angular from 'angular';
import Home from './home/home';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
  Home,
  Contact
])

.name;

export default componentModule;
