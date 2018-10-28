module.exports = {
  bindings: {
    employee: '='
  },
  template: require('./emploee-list-element.html'),
  controller: employeeListElement
};

function employeeListElement() {
  const $ctrl = this;
}