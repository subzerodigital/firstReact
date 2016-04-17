'user strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');


var Authors = React.createClass({

	getInitialState:function(){
		return {
			authors:[]
		};
	},

	componentWillMount:function(){
		console.log('will mount now');
	},

	componentDidMount:function(){
		console.log('mounted');
		this.setState({authors:AuthorApi.getAllAuthors()});

		console.log(this.props.params.id);
	},

	render:function(){
		return (
			<div>
				<h1>Authors top</h1>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}

});


module.exports = Authors;

