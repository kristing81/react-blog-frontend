var Blog = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
        }
    },
    getInitialState: function(){
        return {
            posts: []
        };
    },
    nextId: function() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    componentWillMount: function() {
        var self = this;
        if(this.props.count) {
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" +
                this.props.count + "&start-with-lorem=1&callback=?", function(results){
                    results[0].split('. ').forEach(function(sentence){
                        self.add(sentence.substring(0,80));
                    });
                });
        }
    },
    add: function(text) {
        var arr = this.state.posts;
        arr.push({
            id: this.nextId(),
            post: text
        });
        this.setState({posts: arr});
    },
    update: function(newText, i) {
        var arr = this.state.posts;
        arr[i].post = newText;
        this.setState({posts: arr});
    },
    remove: function(i) {
        var arr = this.state.posts;
        arr.splice(i, 1);
        this.setState({posts: arr});
    },
   eachPost: function(post, i) {
    return (
            <Post key={post.id}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
            >{post.post}</Post>
        );
    },
    render: function() {
        return (<div className="blog">
                    {this.state.posts.map(this.eachPost)}
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus" 
                            onClick={this.add.bind(null, "New Post")}/>
        </div>
        );
    }
});
