import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/about/Title.js';
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
			</div>
		);
	}
}
