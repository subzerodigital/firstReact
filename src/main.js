$ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var appRoutes = require('./routes');

ReactDOM.render(appRoutes,document.getElementById('app'));