'use strict';

var React = require('react');
var RouteHandler  = require('react-router').RouteHandler;
var Header = require('./common/header');

var App = React.createClass({
	render:function(){
		return (
			<div>
				<Header />
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		);

	}
});

module.exports = App;

