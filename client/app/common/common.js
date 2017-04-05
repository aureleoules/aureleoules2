import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
let commonModule = angular.module('app.common', [
  Navbar,
  Footer
])
  
.name;

export default commonModule;
