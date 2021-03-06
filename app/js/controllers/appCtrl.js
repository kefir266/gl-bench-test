/*@ngIngecut*/
function AppCtrl($scope, $state, CreateAccountModal, Events) {
  let appCtrl = this;

  angular.extend(this, {
    addAccount
  });

  appCtrl.option = {
    name: 'GL-Bench-Test',
    settings: {
      headerFixed: false,
      container: false
    }
  };

  function addAccount() {
    CreateAccountModal()
      .then(employee => {
        Events.broadcast(Events.REFRESH_ACCOUNTS);
      })
  }
}

export default (ngModule) => {
  ngModule.controller('AppCtrl', AppCtrl);
}
