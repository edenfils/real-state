import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Service extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="service_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 col-lg-offset-3">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box heading_center">
									<div className="tb_left_heading_wraper heading_center_line">
										<h3>our services</h3>
									</div>
									<p>
										Fusce et sem elementum, mis nibh nec, tincidunt ipsum etiau
										eu ctor turpis. Quisque Cras vel gravida.rpis. Quisque sitmi
										tincidunt ipsum etiau.
									</p>
								</div>
							</div>
						</div>
						<div className="vk_service_inner_setionn">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="ci_icon_wrapper_list ci_icon_wrapper_list_2">
									<div className="ci_icon_img_effect">
										<div className="ci_icon_img_list ci_icon_img_list_2">
											<i className="flaticon-funds" />
											<div className="btc_step_overlay" />
										</div>
									</div>
									<div className="ci_icon_content_left ci_icon_content_left_2">
										<h2>
											<a href="#">sales services</a>
										</h2>
										<p>
											Proin sem neque, tempus ineet sed, webstrot in velit donec
											suscipit ligula lorem.
										</p>
										<h6>
											<a href="#">read more</a>
										</h6>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="ci_icon_wrapper_list ci_icon_wrapper_list_2">
									<div className="ci_icon_img_effect">
										<div className="ci_icon_img_list ci_icon_img_list_2">
											<i className="flaticon-tools" />
											<div className="btc_step_overlay" />
										</div>
									</div>
									<div className="ci_icon_content_left ci_icon_content_left_2">
										<h2>
											<a href="#">fully customize</a>
										</h2>
										<p>
											Proin sem neque, tempus ineet sed, webstrot in velit donec
											suscipit ligula lorem.
										</p>
										<h6>
											<a href="#">read more</a>
										</h6>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="ci_icon_wrapper_list ci_icon_wrapper_list_2">
									<div className="ci_icon_img_effect">
										<div className="ci_icon_img_list ci_icon_img_list_2">
											<i className="flaticon-settings" />
											<div className="btc_step_overlay" />
										</div>
									</div>
									<div className="ci_icon_content_left ci_icon_content_left_2">
										<h2>
											<a href="#">market analysis</a>
										</h2>
										<p>
											Proin sem neque, tempus ineet sed, webstrot in velit donec
											suscipit ligula lorem.
										</p>
										<h6>
											<a href="#">read more</a>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
