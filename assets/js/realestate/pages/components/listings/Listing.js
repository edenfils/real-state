import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination.js';

export default class Listing extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 sidebar2_main_wrapper">
				<div className="left_side_category_wraper">
					<div className="filter-area">
						<div className="showpro">
							<h4>listing style</h4>
						</div>
						<select>
							<option>filter by</option>
							<option>flat</option>
							<option>villa</option>
							<option>rental</option>
						</select>
						<div className="list-grid">
							<ul className="list-inline nav nav-pills">
								<li className="active">
									<a data-toggle="pill" href="#grid">
										<i className="fa fa-th-large" />
									</a>
								</li>
								<li>
									<a data-toggle="pill" href="#list">
										<i className="fa fa-list" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="tab-content">
							<div id="grid" className="tab-pane fade in active">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button alt featured">
															owner
														</div>
														<div className="home-tag-price">$ 2500,00</div>
														<div className="homes-tag button alt sale">
															rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp3.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_1.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">308/9 Degves Street</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">New Mexico, United States</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured offer">
															offer
														</div>
														<div className="home-tag-price">$ 2900,00</div>
														<div
															className="homes-tag button sale"
															id="sale_second_tr"
														>
															sell
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp2.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_4.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">101/9 oliva Street</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">victoria,austraila</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button alt featured">
															owner
														</div>
														<div className="home-tag-price">$ 2500,00</div>
														<div className="homes-tag button alt sale">
															rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp4.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_1.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">308/9 Degves Street</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">New Mexico, United States</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured agent">
															agent
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															Rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp1.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_2.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">308/955 kilda road</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">new south wales,USA</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured offer">
															offer
														</div>
														<div className="home-tag-price">$ 2900,00</div>
														<div
															className="homes-tag button sale"
															id="sale_second_nd"
														>
															sell
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp2.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_4.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">101/9 oliva Street</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">victoria,austraila</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button alt featured">
															owner
														</div>
														<div className="home-tag-price">$ 2500,00</div>
														<div className="homes-tag button alt sale">
															rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp3.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_1.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">308/9 Degves Street</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">New Mexico, United States</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured agent">
															agent
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															Rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp4.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_2.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">308/955 kilda road</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">new south wales,USA</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first">
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured agent">
															agent
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															Rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp5.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="img/lp_img_4.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<a href="#">308/955 diverg road</a>
														</h3>
														<p className="homes-address mb-3">
															<a href="#">new south wales,USA</a>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>house</span>
														</li>
														<li>
															area
															<span>More than 100m2</span>
														</li>
														<li>
															rooms
															<span>03</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															<li>
																<a href="#">
																	<i className="flaticon-shower" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-fan" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-television" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-garage" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-policeman" />
																</a>
															</li>
															<li>
																<a href="#">
																	<i className="flaticon-cctv" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="list" className="tab-pane fade">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured agent">
															agent
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															Rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp3.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">308/955 kilda road</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">new south wales,USA</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button alt featured">
															owner
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp1.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">308/955 kilda road</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">new south wales,USA</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button alt featured">
															owner
														</div>
														<div className="home-tag-price">$ 2500,00</div>
														<div className="homes-tag button alt sale">
															rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp3.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">308/955 kilda road</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">new south wales,USA</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured offer">
															offer
														</div>
														<div className="home-tag-price">$ 2900,00</div>
														<div
															className="homes-tag button sale"
															id="sale_second_12"
														>
															sell
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp1.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">308/955 kilda road</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">new mexico villas,USA</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured agent">
															agent
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															Rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp3.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">308/955 kilda road</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">victoria, australia</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button alt featured">
															owner
														</div>
														<div className="home-tag-price">$ 2500,00</div>
														<div className="homes-tag button alt sale">
															rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp4.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">308/11 degves street</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">new south wales,USA</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured agent">
															agent
														</div>
														<div className="home-tag-price">$ 2700,00</div>
														<div className="homes-tag button alt sale">
															Rent
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp2.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">22/955 oliva road</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">victoria, australia</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="prs_mcc_list_movie_main_wrapper lp_cntnt">
											<div className="project-inner project-head inner_projext_head">
												<div className="homes">
													<a href="#" className="homes-img">
														<div className="homes-tag button featured offer">
															offer
														</div>
														<div className="home-tag-price">$ 2900,00</div>
														<div
															className="homes-tag button sale"
															id="sale_second_pc"
														>
															sell
														</div>
													</a>
												</div>
												<div className="homes_img_wrapper">
													<img
														src="img/lp2.jpg"
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>
											<div className="prs_mcc_list_movie_img_cont_wrapper">
												<div className="homes-content">
													<div className="homes_cntnt_box homes_cntnt_box_2">
														<div className="homes_cntnt_right">
															<h3>
																<a href="#">101/1 oliva street</a>
															</h3>
															<p className="homes-address mb-3">
																<a href="#">new south wales,USA</a>
															</p>
														</div>
													</div>

													<div className="home_wrapper_list">
														<ul className="homes-list clearfix">
															<li>
																type
																<span>house</span>
															</li>
															<li>
																area
																<span>More than 100m2</span>
															</li>
															<li>
																rooms
																<span>03</span>
															</li>
														</ul>
													</div>

													<div className="footer">
														<h3>view map</h3>
														<div className="lp_deals_icon">
															<ul>
																<li>
																	<a href="#">
																		<i className="flaticon-shower" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-fan" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-television" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-garage" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-policeman" />
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="flaticon-cctv" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Pagination />
			</div>
		);
	}
}
