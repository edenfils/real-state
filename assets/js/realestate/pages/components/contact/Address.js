import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Address extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="service_wrapper contct_icon_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="ci_icon_wrapper_list">
								<div className="ci_icon_img_effect">
									<div className="ci_icon_img_list ci_icon_img_list_3">
										<i className="fa fa-map-marker" />
										<div className="btc_step_overlay" />
									</div>
								</div>
								<div className="ci_icon_content_left ci_icon_content_left_2">
									<h2>
										<a href="#">address</a>
									</h2>
									<p>
										101,albele road,
										<br /> south west victoria 300
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="ci_icon_wrapper_list">
								<div className="ci_icon_img_effect">
									<div className="ci_icon_img_list ci_icon_img_list_3">
										<i className="flaticon-fax" />
										<div className="btc_step_overlay" />
									</div>
								</div>
								<div className="ci_icon_content_left ci_icon_content_left_2">
									<h2>
										<a href="#">fax</a>
									</h2>
									<p>
										office : 1437-636-7400
										<br />
										home : 1437-636-3200
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="ci_icon_wrapper_list">
								<div className="ci_icon_img_effect">
									<div className="ci_icon_img_list ci_icon_img_list_3">
										<i className="fa fa-envelope" />
										<div className="btc_step_overlay" />
									</div>
								</div>
								<div className="ci_icon_content_left ci_icon_content_left_2">
									<h2>
										<a href="#">email-address</a>
									</h2>
									<p>
										<a href="#">
											info@finder.com <br /> www.finder.com
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="ci_icon_wrapper_list">
								<div className="ci_icon_img_effect">
									<div className="ci_icon_img_list ci_icon_img_list_3">
										<i className="fa fa-phone" />
										<div className="btc_step_overlay" />
									</div>
								</div>
								<div className="ci_icon_content_left ci_icon_content_left_2">
									<h2>
										<a href="#">phonefax</a>
									</h2>
									<p>
										local : 1-997-13-finder
										<br />
										mobile : 1-997-66-finder
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
