var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var Header = require('./components/common/header');

/*
	ReactDOM.render(<Home />,document.getElementById('app'));
*/

(function(window){

	var App = React.createClass({
		render:function(){
			var Child;

			switch (this.props.route){
				case 'about':
					Child = About;
					break;
				case 'authors':
					Child = Authors;
					break;
				default:
					Child = Home;
			}

			return (
				<div>
					<Header />
					<Child />
				</div>
			)

		}
	});

	function render(){

		var route = window.location.hash.substr(1);
		console.log(route);
		ReactDOM.render(<App route={route} />,document.getElementById('app'));
	}

	function render2(){
		var route = window.location.hash.substr(1);
		//console.log(route);
		var container = document.getElementById('app');
		switch(route){
			case 'about':
				ReactDOM.render(<About />,container);
				break;
			default:
				ReactDOM.render(<Home />,container);
				break;
		}
	}

	window.addEventListener('hashchange',render);
	render();

})(window);



//window.addEventListener('haschange',render2);
//render2();