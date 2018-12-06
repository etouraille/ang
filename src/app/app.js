import angular from 'angular';
import ngRoute from 'angular-route';
import blue from './controller/blue.js';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($scope) {
    $scope.name = 'Eddy';
  }
}

let helloWorld = () => {
  return {
    template : '<input />'
  }
}



const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  ngRoute
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);
angular.module('app')


angular.module( MODULE_NAME )
  .controller('blueController', blue )
  .directive('hello', helloWorld )
  .config(function( $routeProvider, $locationProvider ) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when("/blue", {
        templateUrl : "template/blue.html",
        controller : AppCtrl
      });
});

export default MODULE_NAME;
