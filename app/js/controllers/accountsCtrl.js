function AccountsCtrl ($scope, $rootScope, $state, $stateParams) {
  let acounts = this;
  
  return acounts;
};

AccountsCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams'];

export default (ngModule) => {
  ngModule.controller('AccountsCtrl', AccountsCtrl);
}
