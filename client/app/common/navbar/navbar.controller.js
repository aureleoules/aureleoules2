class NavbarController {
  constructor($scope, $location) {
    this.name = 'navbar';
    this.getClass = function (path) {
      return ($location.path() === path)
        ? 'is-active'
        : '';
    }
  }
  static get $inject(){ return ["$scope", "$location"]; }
}

export default NavbarController;