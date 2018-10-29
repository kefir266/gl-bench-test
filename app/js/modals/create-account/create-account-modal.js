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
function CreateAccountModalCtrl($uibModalInstance, AccountModel) {
  const $ctrl = this;

  angular.extend(this, {
    save,
    cancel,
    changeName,
    changeEmail,
    emailExist: false
  });

  function save() {
    if (!$ctrl.form.$valid) {
      return false;
    }
    const params = { email: $ctrl.employee.email };
    AccountModel.getEmployees(params).$promise
      .then(response => {
        if (response.length) {
          $ctrl.form.$invalid = true;
          $ctrl.emailExist = true;
          return false;
        } else {
          AccountModel.create($ctrl.employee).$promise
            .then(response => $uibModalInstance.close(response));
        }
      });
  }

  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }

  function changeName() {
    $ctrl.employee.name = `${$ctrl.employee.firstName||''}.${$ctrl.employee.lastName||''}`;
  }

  function changeEmail() {
    $ctrl.emailExist = false;
  }
}