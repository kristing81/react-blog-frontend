var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var ReactBlog = require('./components/ReactBlog.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var PostsPage = require('./components/posts/PostsPage.react.jsx');
var PostPage = require('./components/posts/PostPage.react.jsx');
var PostNew = require('./components/posts/PostNew.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={ReactBlog}>
    <DefaultRoute handler={PostsPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="posts" path="/posts" handler={PostsPage}/>
    <Route name="post" path="/posts/:postId" handler={PostPage} />
    <Route name="new-post" path="/post/new" handler={PostNew}/>
  </Route>
);
