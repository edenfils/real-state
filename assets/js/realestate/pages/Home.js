import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/home/Slider.js';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Slider />
			</div>
		);
	}
}
