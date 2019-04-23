import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Details from '.././widgets/Details.js';
import Share from '.././widgets/Share.js';
import Agent from '.././widgets/Agent.js';

export default class Sidebar extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Details />
				<Share />
				<Agent />
			</div>
		);
	}
}
