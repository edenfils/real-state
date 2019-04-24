import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/Header.js';
import Footer from './includes/Footer.js';
import Home from './pages/Home.js';
import Listings from './pages/Listings.js';
import AboutUs from './pages/AboutUs.js';
import ContactUs from './pages/ContactUs.js';
<<<<<<< HEAD
import Property from './pages/Property.js';

=======
>>>>>>> c984d3bea052545e4d6c87aa9f3c1c45632315b5
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	async test() {}
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/listings" component={Listings} />
					<Route exact path="/about" component={AboutUs} />
					<Route exact path="/contact" component={ContactUs} />
					<Route exact path="/item" component={Property} />

					<Footer />
				</div>
			</Router>
		);
	}
}
