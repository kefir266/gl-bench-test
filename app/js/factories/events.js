module.exports = Events;

/*@ngInject*/
function Events($rootScope) {
  return {
    REFRESH_ACCOUNTS: 'RefreshAccounts',

    /**
     * @param {string} event
     * @param {function()} callback
     * @returns {*}
     */
    on(event, callback) {
      return $rootScope.$on(event, callback);
    },
    /**
     * @param {string} event
     * @param {*} payload
     * @returns {*}
     */
    broadcast(event, payload) {
      return $rootScope.$broadcast(event, payload);
    },
  }
}