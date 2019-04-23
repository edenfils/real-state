import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Pagination extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="blog_pagination_section blog_page_category">
					<ul>
						<li>
							<a href="#" className="prev">
								{' '}
								prev{' '}
							</a>
						</li>
						<li>
							<a href="#">01</a>
						</li>
						<li>
							<a href="#">02</a>
						</li>
						<li className="blog_pagination_after">
							<a href="#">03</a>
						</li>
						<li className="hidden-xs">
							<a href="#">04</a>
						</li>

						<li>
							<a href="#" className="next">
								next
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
