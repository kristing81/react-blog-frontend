var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3002";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
    REGISTRATION:   APIRoot + "/v1/users",
    POSTS:        APIRoot + "/v1/posts"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    REDIRECT: null,

    LOAD_POSTS: null,
    RECEIVE_POSTS: null,
    LOAD_POST: null,
    RECEIVE_POST: null,
    CREATE_POST: null,
    RECEIVE_CREATED_POST: null
  })

};
