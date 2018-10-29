// config
export default (ngModule) => {
    ngModule
        .run(['$templateCache', function($templateCache) {
          // if you want add template
        }])
      .service('AccountModel', require('./models/account.model'))
      .component('employeeListElement', require('./components/employee-list-element'))
      .factory('CreateAccountModal', require('./modals/create-account/create-account-modal'))
      .factory('Events', require('./factories/events'));

}


