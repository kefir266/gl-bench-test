module.exports = {
  bindings: {
    employee: '='
  },
  template: require('./emploee-list-element.html'),
  controller: employeeListElement
};

/*@ngInject*/
function employeeListElement(AccountModel) {
  const $ctrl = this;
  $ctrl.disableAccount = function () {
    $ctrl.employee.status = 'Disable';
    AccountModel.save($ctrl.employee);
  }
  

}