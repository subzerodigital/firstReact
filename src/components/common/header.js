'user strict';


var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
	render:function(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
					</a>
					<ul className="nav navbar-nav">
						<li>
							<Link to="home">Home</Link>
						</li>
						<li>
							<Link to="authors">Authors</Link>
						</li>
						<li>
							<Link to="about">about</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;