var ReactBlogDispatcher = require('../dispatcher/ReactBlogDispatcher.js');
var ReactBlogConstants = require('../constants/ReactBlogConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = ReactBlogConstants.ActionTypes;

module.exports = {

  signup: function(email, password, passwordConfirmation) {
    ReactBlogDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, password, passwordConfirmation);
  },

  login: function(email, password) {
    ReactBlogDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {
    ReactBlogDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

};
