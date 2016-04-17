'use strict';

var React = require('react');
var Link = require('react-router').Link;



var Home = React.createClass({
	render:function(){
		return (
			<div className="jumbotron">
				<h1>Plural site</h1>
				<p>Discription here 32</p>
				<Link to="about" className="btn btn-primary btn-large">Learn more</Link>
			</div>
		);
	}
});

module.exports = Home;