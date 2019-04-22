import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Agents from './components/home/Agents.js';
import Testimonial from './components/home/Testimonial.js';
import Partner from './components/home/Partner.js';

export default class AboutUs extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Agents />
				<Testimonial />
				<Partner />
			</div>
		);
	}
}
