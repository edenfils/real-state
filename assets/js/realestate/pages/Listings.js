import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/listings/Title.js';
import Listing from './components/listings/Listing.js';
import Filter from './components/listings/Filter.js';


export default class Listings extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {

		return (
			<div>
				<Title />
				<div className="rs_property_categories_wrapper realestate_prop_cate_wrapper">
					<div className="container">
						<div className="row">
							<Listing />
							<Filter />
						</div>
					</div>
				</div>
			</div>
		);
		return <div>Listings page</div>;
	}
}
