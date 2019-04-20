import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	async test() {}
	render() {
		return <h1>this is the homepage</h1>;
	}
}
