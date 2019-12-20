app.controller('FormsController', [
  '$scope',
  '$http',
  '$rootScope',
  '$state',
  '$translate',
  '$filter',
  '$sessionStorage',
  '$timeout',
  FormsController,
]);

function FormsController ($scope, $http, $rootScope, $state, $translate, $filter, $sessionStorage, $timeout) {
  var ctrl = this;

  $scope.state = {};
}