'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render:function(){
		return(
			<div>
				<h1>Page not found</h1>
				<p>Ooops, there's nothing here</p>
				<Link to="home" className="btn-default">Back to Home</Link>
			</div>
		);
	}
});


module.exports = NotFoundPage;