var React = require('react');
var ReactBlogDispatcher = require('../../dispatcher/ReactBlogDispatcher.js');
var ReactBlogConstants = require('../../constants/ReactBlogConstants.js');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var PostActionCreators = require('../../actions/PostActionCreators.react.jsx');
var RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx');

var PostNew = React.createClass({

  componentDidMount: function() {
    if (!SessionStore.isLoggedIn()) { 
      RouteActionCreators.redirect('app');
    }
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value;
    var body = this.refs.body.getDOMNode().value;
    PostActionCreators.createPost(title, body);
  },

  render: function() {
    return (
      <div className="row">
        <form onSubmit={this._onSubmit} className="new-post">
          <div className="new-post__title">
            <input type="text" placeholder="Title" name="title" ref="title" /> 
          </div>
          <div className="new-post__body">
            <textarea rows="10" placeholder="Your post..." name="body" ref="body" /> 
          </div>
          <div className="new-post__submit">
            <button type="submit">Create</button>
          </div>
         </form>
       </div>
     );
  }

});

module.exports = PostNew;
