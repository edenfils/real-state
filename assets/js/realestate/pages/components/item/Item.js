import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';

export default class Item extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 sidebar2_main_wrapper">
					<div className="lest_news_box_wrapper">
						<div className="video_img_section_wrapper">
							<div className="video_img_section">
								<div className="owl-carousel owl-theme">
									<div className="item" data-hash="zero">
										<div className="btn_sale">sell $800,000</div>
										<img
											src="img/galery_blog.jpg"
											className="img-responsive"
											alt="video_img"
										/>
									</div>
									<div className="item" data-hash="one">
										<div className="btn_sale">sell $800,000</div>
										<img
											src="img/galery_blog.jpg"
											className="img-responsive"
											alt="video_img"
										/>
									</div>
									<div className="item" data-hash="two">
										<div className="btn_sale">sell $800,000</div>
										<img
											src="img/galery_blog.jpg"
											className="img-responsive"
											alt="video_img"
										/>
									</div>
								</div>
							</div>

							<div className="video_nav_img">
								<h3>1 of 8 photos</h3>
								<div className="vedio_nav_wrappper">
									<div className="vedio_img_btm_wrapper">
										<a className="button secondary url owl_nav" href="#zero">
											<div className="gc_filter_cont_overlay" />
											<img
												src="img/galery_1.png"
												className="img-responsive"
												alt="nav_img"
											/>
										</a>
									</div>
								</div>
								<div className="vedio_nav_wrappper">
									<div className="vedio_img_btm_wrapper">
										<div className="gc_filter_cont_overlay" />
										<a className="button secondary url owl_nav" href="#one">
											<div className="gc_filter_cont_overlay" />
											<img
												src="img/galery_1.png"
												className="img-responsive"
												alt="nav_img"
											/>
										</a>
									</div>
								</div>
								<div className="vedio_nav_wrappper">
									<div className="vedio_img_btm_wrapper">
										<a className="button secondary url owl_nav" href="#two">
											<div className="gc_filter_cont_overlay" />
											<img
												src="img/galery_1.png"
												className="img-responsive"
												alt="nav_img"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="lest_news_cont_wrapper">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box">
									<div className="tb_left_heading_wraper_2 tb_left_heading_wraper">
										<h3>house description</h3>
									</div>
								</div>
							</div>
							<div>
								<p>
									Web typography is now more stylish and malleable than ever
									before. New CSS3 properties allow for trul unique typographic
									effects that in the past wouldve required images and custom
									JavaScript.Each of the following code snippets. This is shop
									version of Lorem Ipsum. Proin gravida nibh duma nibh vel velit
									auctor aliquet. Aenean sollicitudin, lorem quis auctor, nisi
									consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio
									sit amet nibh vulputate cursus a sit amet mauris.
									<br />
									<br /> For this post I have collected 25 small web-based apps
									and tools that will in one way or another offer quick
									solutions to many of those frustrating and time-consuming
									tasks you will often have to overcomesed apps and tools that.
									<br />
									<br />
									<i className="para_itag">
										Presented home which is well maintained with long term
										tenant of 4 years! Situated in a high demand location, in
										close proximity to local amenities, public transport.
									</i>
								</p>
								<div className="abt_btn property_single_btn">
									<ul>
										<li>
											<a href="#">offers over $45,999</a>
										</li>
										<li>
											<a href="#">contact our agent</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="indoor_wrapper">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box">
									<div className="tb_left_heading_wraper_2 tb_left_heading_wraper">
										<h3>Indoor Amenities</h3>
									</div>
								</div>
							</div>
							<div className="vk_service_inner_setionn sp_indoor_cntnt_wrapper">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-air-conditioner" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">air conditioning</a>
												</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-television" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">cable tv</a>
												</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-computer-screen" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">computer</a>
												</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-liquid-soap" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">dish washer</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="indoor_wrapper outdoor_wrapper">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box">
									<div className="tb_left_heading_wraper_2 tb_left_heading_wraper">
										<h3>outdoor Amenities</h3>
									</div>
								</div>
							</div>
							<div className="vk_service_inner_setionn sp_indoor_cntnt_wrapper">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-barbecue" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">grill</a>
												</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-balcony-and-door" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">balcony</a>
												</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-flowers" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">garden</a>
												</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width">
										<div className="ci_icon_wrapper_list sp_indor_box">
											<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
												<div className="ci_icon_img_list sp_img_list">
													<i className="flaticon-garage" />
													<div className="btc_step_overlay" />
												</div>
											</div>
											<div className="ci_icon_content_left sp_content_left sp_cnttnt">
												<h2>
													<a href="#">garage</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sidebar_main_wrapper">
					<Sidebar />
				</div>
			</div>
		);
	}
}
