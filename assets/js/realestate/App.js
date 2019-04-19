import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return <div>this is the homepage</div>;
	}
}
