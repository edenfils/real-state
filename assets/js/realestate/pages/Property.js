import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/item/Title.js';
import Item from './components/item/Item.js';
import Latest from './components/home/Latest.js';

export default class Property extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Title />
				<div className="rs_property_categories_wrapper full_grid_wrapper ass">
					<div className="container">
						<div className="row">
							<Item />
						</div>
					</div>
				</div>
				<Latest />
			</div>
		);
	}
}
