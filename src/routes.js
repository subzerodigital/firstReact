'use strict';

var React = require('react');
var reactRouter = require('react-router');

var Route = reactRouter.Route;
var Router = reactRouter.Router;
var IndexRoute = reactRouter.IndexRoute;

var routes = (
	<Router>
		<Route path="/" component={require('./components/app')}>
			<IndexRoute path="home" component={require('./components/homePage')} />
			<Route path="home" component={require('./components/homePage')} />
			<Route path="authors" component={require('./components/authors/authorPage')} />
			<Route path="about" component={require('./components/about/aboutPage')} />
		</Route>
	</Router>
);

module.exports = routes;












