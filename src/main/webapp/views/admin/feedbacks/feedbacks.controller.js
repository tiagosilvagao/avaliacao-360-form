app.controller('FeedbacksController', [
  '$scope',
  '$http',
  '$rootScope',
  '$state',
  '$translate',
  '$filter',
  '$sessionStorage',
  '$timeout',
  FeedbacksController,
]);

function FeedbacksController ($scope, $http, $rootScope, $state, $translate, $filter, $sessionStorage, $timeout) {
  var ctrl = this;

  $scope.state = {};
}