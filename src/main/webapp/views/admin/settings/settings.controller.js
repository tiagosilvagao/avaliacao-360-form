app.controller('SettingsController', [
  '$scope',
  '$state',
  SettingsController,
]);

function SettingsController ($scope, $state) {
  $state.go('dashboard.settings.managers');

  $scope.state = {};
}