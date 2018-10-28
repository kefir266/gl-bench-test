/*@njInject*/
function AccountsCtrl (
  $scope,
  $rootScope,
  $state,
  $stateParams,
  employees
) {
  angular.extend(this, {employees});
}

export default (ngModule) => {
  ngModule.controller('AccountsCtrl', AccountsCtrl);
}
