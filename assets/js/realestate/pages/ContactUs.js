import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/contact/Title.js';
import Form from './components/contact/Form.js';
import Address from './components/contact/Address.js';

export default class AboutUs extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Title />
				<Form />
				<Address />
			</div>
		);
	}
}
