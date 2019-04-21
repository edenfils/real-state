import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Deals extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="deals_wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
								<div className="tb_work_txt_wrapper">
									<div className="abt_txt_box">
										<div className="tb_left_heading_wraper">
											<h3>the best real estate deals.</h3>
										</div>
										<p>
											Fusce et sem elementum, mis nibh nec, tincidunt ipsum
											etiau eu ctor turpis. Quisque sitmi lementum, mis nibh
											nec, tincidunt ipsumelit. Cras vel dui vel orciarel
											gravida.rpis. Quisque sitmi tincidunt ipsum etiau.
										</p>
										<div className="deals_btn deal_2_btn">
											<ul>
												<li>
													<a href="#">deal now!</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
								<div className="deals_form_pader">
									<div className="deals_form_tab">
										<div role="tabpanel">
											<ul id="tabTwo" className="nav nav-tabs nav-justified">
												<li className="active">
													<a href="#contentTwo-1" data-toggle="tab">
														buy
													</a>
												</li>
												<li>
													<a href="#contentTwo-2" data-toggle="tab">
														rent
													</a>
												</li>
												<li>
													<a href="#contentTwo-3" data-toggle="tab">
														project
													</a>
												</li>
											</ul>

											<div className="tab-content">
												<div
													className="tab-pane fade in active main-search-field "
													id="contentTwo-1"
												>
													<div className="at-col-default-mar">
														<input
															type="text"
															placeholder="enter your keyword"
														/>
													</div>

													<div className="at-col-default-mar">
														<input
															type="text"
															placeholder="enter city/locality name"
														/>
													</div>

													<div className="at-col-default-mar">
														<div className="at-col-default-mar">
															<select>
																<option value="0" selected="selected">
																	Types
																</option>
																<option value="1">Family House</option>
																<option value="2">Apartment</option>
																<option value="3">villa</option>
															</select>
														</div>
													</div>

													<div className="at-col-default-mar">
														<select
															className="div-toggle"
															data-target=".my-info-1"
														>
															<option value="0" selected="selected">
																02 bathroomn
															</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
														</select>
													</div>

													<div className="at-col-default-mar no-mb">
														<select>
															<option value="0" selected="selected">
																02 bedroom
															</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
														</select>
													</div>

													<div className="b-search__main-form label">
														<h5>area</h5>
														<div className="range">
															<div id="range-price" className="range-box" />

															<input
																type="text"
																id="price"
																className="price-box"
																readonly="readonly"
															/>
														</div>
													</div>
													<div className="b-search__main-form label">
														<h5>price</h5>
														<div className="range">
															<div id="range-price_2" className="range-box" />

															<input
																type="text"
																id="price_2"
																className="price-box"
																readonly="readonly"
															/>
														</div>
													</div>

													<div className="at_btn_form deals_btn">
														<ul>
															<li>
																<a href="#">search properties</a>
															</li>
														</ul>
													</div>
												</div>
												<div
													className="tab-pane fade main-search-field "
													id="contentTwo-2"
												>
													<div className="at-col-default-mar">
														<input
															type="text"
															placeholder="enter your keyword"
														/>
													</div>

													<div className="at-col-default-mar">
														<input
															type="text"
															placeholder="enter city/locality name"
														/>
													</div>

													<div className="at-col-default-mar">
														<div className="at-col-default-mar">
															<select>
																<option value="0" selected="selected">
																	Types
																</option>
																<option value="1">Family House</option>
																<option value="2">Apartment</option>
																<option value="3">flat</option>
															</select>
														</div>
													</div>

													<div className="at-col-default-mar">
														<select
															className="div-toggle"
															data-target=".my-info-1"
														>
															<option value="0" selected="selected">
																02 bathroomn
															</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
														</select>
													</div>

													<div className="at-col-default-mar no-mb">
														<select>
															<option value="0" selected="selected">
																02 bedroom
															</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
														</select>
													</div>

													<div className="at-col-default-mar">
														<input
															type="text"
															className="datepicker"
															placeholder="check in:"
														/>
													</div>
													<div className="at-col-default-mar">
														<input
															type="text"
															className="datepicker"
															placeholder="check out:"
														/>
													</div>
													<div className="at-col-default-mar">
														<h5>$80,000</h5>
													</div>
													<div className="at_btn_form deals_btn">
														<ul>
															<li>
																<a href="#">book property</a>
															</li>
														</ul>
													</div>
												</div>
												<div
													className="tab-pane fade main-search-field "
													id="contentTwo-3"
												>
													<div className="at-col-default-mar">
														<input
															type="text"
															placeholder="enter your keyword"
														/>
													</div>

													<div className="at-col-default-mar">
														<input
															type="text"
															placeholder="enter city/locality name"
														/>
													</div>

													<div className="at-col-default-mar">
														<div className="at-col-default-mar">
															<select>
																<option value="0" selected="selected">
																	Types
																</option>
																<option value="1">Family House</option>
																<option value="2">Apartment</option>
																<option value="3">Condo</option>
															</select>
														</div>
													</div>

													<div className="at-col-default-mar">
														<select
															className="div-toggle"
															data-target=".my-info-1"
														>
															<option value="0" selected="selected">
																02 bathroomn
															</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
														</select>
													</div>

													<div className="at-col-default-mar no-mb">
														<select>
															<option value="0" selected="selected">
																02 bedroom
															</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
														</select>
													</div>

													<div className="b-search__main-form label">
														<h5>area</h5>
														<div className="range">
															<div id="range-price_5" className="range-box" />

															<input
																type="text"
																id="price_5"
																className="price-box"
																readonly="readonly"
															/>
														</div>
													</div>
													<div className="b-search__main-form label">
														<h5>price</h5>
														<div className="range">
															<div id="range-price_6" className="range-box" />

															<input
																type="text"
																id="price_6"
																className="price-box"
																readonly="readonly"
															/>
														</div>
													</div>

													<div className="at_btn_form deals_btn">
														<ul>
															<li>
																<a href="#">search properties</a>
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
		);
	}
}
