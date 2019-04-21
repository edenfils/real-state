import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/Header.js';
import Footer from './includes/Footer.js';
import Home from './pages/Home.js';

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
			<div>
				<Header />
				<Home />
				<Footer />
			</div>
		);
	}
}
