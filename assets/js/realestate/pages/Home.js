import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/home/Slider.js';
import Deals from './components/home/Deals.js';
import Latest from './components/home/Latest.js';
import About from './components/home/About.js';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Slider />
				<Deals />
				<Latest />
				<About />
			</div>
		);
	}
}
