module.exports = AccountModel;

/*@ngInject*/
function AccountModel($resource) {
  const root = 'http://localhost:3000';

  return $resource(`${root}/employees/:id`, {}, {
    'getEmployees': {
      method: 'GET',
      isArray: true
    }
  })
}