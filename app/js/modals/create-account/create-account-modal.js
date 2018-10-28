module.exports = CreateAccountModal;

/*@ngInject*/
function CreateAccountModal($uibModal) {
  return function (params) {
    return $uibModal.open({
      template: require('./create-account-modal.html'),

      controller: CreateAccountModalCtrl,
      controllerAs: '$ctrl',
      bindings: {
        employee: '<'
      },
      resolve: {
        params
      }
    }).result;
  };
}

/*@ngInject*/
function CreateAccountModalCtrl($uibModalInstance) {
  const $ctrl = this;

  angular.extend(this, {
    save,
    cancel,
    changeName
  });

  function save() {
    if (!$ctrl.form.$valid) {
      return false;
    }
    //TODO check for unique e-mail

    //TODO save
    console.log(this.employee);
  }

  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }

  function changeName() {
    $ctrl.employee.name = `${$ctrl.employee.firstName||''}.${$ctrl.employee.lastName||''}`
  }
}