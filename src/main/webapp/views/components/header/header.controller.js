app.controller('HeaderController', [
  '$scope',
  '$rootScope',
  HeaderController,
]);

function HeaderController ($scope,$rootScope) {
  var $ctrl = this;

  $scope.$emit('msgFromSecondCtrl', 'emit do segundo controller');

  $ctrl.handleAsideToggle = function() {
    //$scope.$broadcast('msgFromSecondCtrl', 'emit do segundo controller');
    $rootScope.statusMenu= 'suaclasse';
  }

}