var ReactBlogDispatcher = require('../dispatcher/ReactBlogDispatcher.js');
var ReactBlogConstants = require('../constants/ReactBlogConstants.js');

var ActionTypes = ReactBlogConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    ReactBlogDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },
};
