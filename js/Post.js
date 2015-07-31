var Post = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    componentWillMount: function(){
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 450) + 'px',
            top: this.randomBetween(0, window.innerHeight - 450) + 'px',
            transform: 'rotate(' + this.randomBetween(-10, 10) + 'deg)'
        };
    },
    componentDidMount: function() {
        $(this.getDOMNode()).draggable();
    },
    randomBetween: function(min, max) {
        return(min + Math.ceil(Math.random() * max));
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
        this.setState({editing: false});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div className="post" 
                style={this.style}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="post"
                style={this.style}>
            <textarea ref="newText" defaultValue={this.props.children} 
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});
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
            $.getJSON("http://localhost:3000/posts.json" +
                this.props.count + "&callback=?", function(results){
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
React.render(<Blog count={50}/>, 
    document.getElementById('react-container'));
