import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Title extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="page_title_section">
				<div className="page_title_overlay" />
				<div className="page_header text-center">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
								<div className="page_header_line">
									<h1>
										<span>House 17 thbridge Park, NSW, 2770 </span>
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
						<div className="row">
							<div className="page_header_bottom">
								<ul className="sub_title">
									<li>
										<a href="#"> Home </a>
									</li>
									<li className="icon_breamcum"> > </li>
									<li>
										<a href="#"> property </a>
									</li>
									<li className="icon_breamcum"> > </li>
									<li>property sell I</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
