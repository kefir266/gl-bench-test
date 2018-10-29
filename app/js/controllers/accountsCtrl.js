/*@njInject*/
function AccountsCtrl (
  $scope,
  $rootScope,
  $state,
  $stateParams,
  employees,
  Events,
  AccountModel
) {
  const $ctrl = this;
  angular.extend(this, {employees});
  Events.on(Events.REFRESH_ACCOUNTS, () => {
    AccountModel.getEmployees().$promise
      .then(response => {
        $ctrl.employees = response;
      })
  })
}

export default (ngModule) => {
  ngModule.controller('AccountsCtrl', AccountsCtrl);
}
