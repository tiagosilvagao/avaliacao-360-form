app.controller('AsideController', [
  '$scope',
  '$rootScope',
  '$state',
  AsideController,
]);

function AsideController ($scope, $rootScope, $state) {
  var $ctrl = this;
  $rootScope.statusMenu = 'teste'
  $scope.$state = $state

  $scope.$on('msgFromSecondCtrl', function(event, data) {
    console.log(data)
  });
    
}