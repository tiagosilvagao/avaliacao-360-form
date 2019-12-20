app.controller('SettingsController', [
  '$scope',
  '$http',
  '$rootScope',
  '$state',
  '$translate',
  '$filter',
  '$sessionStorage',
  '$timeout',
  SettingsController,
]);

function SettingsController ($scope, $http, $rootScope, $state, $translate, $filter, $sessionStorage, $timeout) {
  var ctrl = this;

  $scope.state = {};
}