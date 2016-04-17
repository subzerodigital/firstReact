'use strict';

var React = require('react');
var reactRouter = require('react-router');

var Route = reactRouter.Route;
var Router = reactRouter.Router;
var IndexRoute = reactRouter.IndexRoute;
var Redirect = reactRouter.Redirect;
var NotFoundRoute = reactRouter.NotFoundPage;
var hashHistory = reactRouter.hashHistory;
var browserHistory = reactRouter.browserHistory;

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={require('./components/app')}>
			<IndexRoute component={require('./components/homePage')} />
			<Route path="home" component={require('./components/homePage')} />
			<Route path="authors" component={require('./components/authors/authorPage')} />
			<Route path="authors/:id" component={require('./components/authors/authorPage')} />
			<Route path="about" component={require('./components/about/aboutPage')} />
			<Redirect from="about-us" to="about" />
			<Redirect from="about/*" to="about" />
		</Route>
	</Router>
);

module.exports = routes;












