app.controller('UsersController', [
  '$scope',
  '$http',
  '$rootScope',
  '$state',
  '$translate',
  '$filter',
  '$sessionStorage',
  '$timeout',
  UsersController,
]);

function UsersController ($scope, $http, $rootScope, $state, $translate, $filter, $sessionStorage, $timeout) {
  var ctrl = this;

  $scope.state = {};
}