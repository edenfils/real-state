import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/about/Title.js';
import Deals from './components/about/Deals.js';
import Service from './components/home/Service.js';
import Info from './components/about/Info.js';
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
				<Title />
				<Deals />
				<Service />
				<Info />
				<Agents />
				<Testimonial />
				<Partner />
			</div>
		);
	}
}
