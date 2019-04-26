import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './components/listings/Title.js';
import Listing from './components/listings/Listing.js';
import Filter from './components/listings/Filter.js';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {
			listingsData: ''
		};
	}

	componentDidMount() {
		const self = this;
		axios
			.get('/api/listings')
			.then(function(response) {
				self.setState(
					{
						listingsData: response.data
					},
					() => {
						console.log(self.state);
					}
				);
			})
			.catch(function(error) {
				//handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}

	render() {
		return (
			<div>
				<Title />
				<div className="rs_property_categories_wrapper realestate_prop_cate_wrapper">
					<div className="container">
						<div className="row">
							<Listing listingsData={this.state.listingsData} />
							<Filter />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
