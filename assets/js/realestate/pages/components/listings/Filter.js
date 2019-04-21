import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sidebar_main_wrapper">
				<div className="sidebar_widget">
					<h4>search</h4>
					<form className="search_form" role="search">
						<div className="form-group">
							<i className="fa fa-search" />
							<input
								type="text"
								className="form-control"
								placeholder="keywords"
							/>
						</div>
						<button type="submit">refine</button>
					</form>
				</div>

				<div className="deals_form_pader sp_categories_pricing">
					<div className="deals_form_tab deals_form_tab_2">
						<div role="tabpanel">
							<ul id="tabTwo" className="nav nav-tabs">
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
									className="tab-pane fade in active main-search-field main-search-field_2"
									id="contentTwo-1"
								>
									<div className="at-col-default-mar pricing_inputfield">
										<input type="text" placeholder="enter your keyword" />
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<input type="text" placeholder="enter city/locality name" />
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<div className="at-col-default-mar">
											<select>
												<option value="0" selected>
													Types
												</option>
												<option value="1">Family House</option>
												<option value="2">Apartment</option>
												<option value="3">villa</option>
											</select>
										</div>
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<select className="div-toggle" data-target=".my-info-1">
											<option value="0" selected>
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

									<div className="at-col-default-mar no-mb pricing_inputfield">
										<select>
											<option value="0" selected>
												02 bedroom
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>

									<div className="b-search__main-form label price_area_label">
										<h5>area</h5>
										<div className="range range_2">
											<div id="range-price" className="range-box" />

											<input
												type="text"
												id="price"
												className="price-box"
												readonly
											/>
										</div>
									</div>
									<div className="b-search__main-form label price_area_label">
										<h5>price</h5>
										<div className="range range_2">
											<div id="range-price_2" className="range-box" />

											<input
												type="text"
												id="price_2"
												className="price-box"
												readonly
											/>
										</div>
									</div>

									<div className="at_btn_form deals_btn blog_cate_btn">
										<ul>
											<li>
												<a href="#">search properties</a>
											</li>
										</ul>
									</div>
								</div>
								<div
									className="tab-pane fade main-search-field main-search-field_2"
									id="contentTwo-2"
								>
									<div className="at-col-default-mar pricing_inputfield">
										<input type="text" placeholder="enter your keyword" />
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<input type="text" placeholder="enter city/locality name" />
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<div className="at-col-default-mar">
											<select>
												<option value="0" selected>
													Types
												</option>
												<option value="1">Family House</option>
												<option value="2">Apartment</option>
												<option value="3">villa</option>
											</select>
										</div>
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<select className="div-toggle" data-target=".my-info-1">
											<option value="0" selected>
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

									<div className="at-col-default-mar no-mb pricing_inputfield">
										<select>
											<option value="0" selected>
												02 bedroom
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<input
											type="text"
											className="datepicker"
											placeholder="check in:"
										/>
									</div>
									<div className="at-col-default-mar pricing_inputfield">
										<input
											type="text"
											className="datepicker"
											placeholder="check out:"
										/>
									</div>
									<div className="at-col-default-mar at_price at_price_2">
										<h5>$80,000</h5>
									</div>

									<div className="at_btn_form deals_btn blog_cate_btn">
										<ul>
											<li>
												<a href="#">book properties</a>
											</li>
										</ul>
									</div>
								</div>
								<div
									className="tab-pane fade main-search-field main-search-field_2"
									id="contentTwo-3"
								>
									<div className="at-col-default-mar pricing_inputfield">
										<input type="text" placeholder="enter your keyword" />
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<input type="text" placeholder="enter city/locality name" />
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<div className="at-col-default-mar">
											<select>
												<option value="0" selected>
													Types
												</option>
												<option value="1">Family House</option>
												<option value="2">Apartment</option>
												<option value="3">villa</option>
											</select>
										</div>
									</div>

									<div className="at-col-default-mar pricing_inputfield">
										<select className="div-toggle" data-target=".my-info-1">
											<option value="0" selected>
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

									<div className="at-col-default-mar no-mb pricing_inputfield">
										<select>
											<option value="0" selected>
												02 bedroom
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>

									<div className="b-search__main-form label price_area_label">
										<h5>area</h5>
										<div className="range range_2">
											<div id="range-price_5" className="range-box" />

											<input
												type="text"
												id="price_5"
												className="price-box"
												readonly
											/>
										</div>
									</div>
									<div className="b-search__main-form label price_area_label">
										<h5>price</h5>
										<div className="range range_2">
											<div id="range-price_6" className="range-box" />

											<input
												type="text"
												id="price_6"
												className="price-box"
												readonly
											/>
										</div>
									</div>

									<div className="at_btn_form deals_btn blog_cate_btn">
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
				<div className="sidebar_widget">
					<h4>top agents</h4>
					<div className="blog_wrapper1 blog_wrapper3">
						<div className="blog_image blog_image_2">
							<img
								src="img/client_3.jpg"
								className="img-responsive"
								alt="img"
							/>
						</div>
						<div className="blog_text blog_cate_text">
							<h5>
								<a href="#">Rihanna Alexander</a>
							</h5>
							<div className="blog_date blog_date_2">
								<i className="fa fa-phone" aria-hidden="true" />+91 12345 67890
							</div>
						</div>
					</div>
					<div className="blog_wrapper2">
						<div className="blog_image blog_image_2">
							<img
								src="img/client_2.jpg"
								className="img-responsive"
								alt="img"
							/>
						</div>
						<div className="blog_text blog_cate_text">
							<h5>
								<a href="#"> Alex doe</a>
							</h5>
							<div className="blog_date blog_date_2">
								<i className="fa fa-phone" aria-hidden="true" />+91 12345 63320
							</div>
						</div>
					</div>
					<div className="blog_wrapper2">
						<div className="blog_image blog_image_2">
							<img
								src="img/client_3.jpg"
								className="img-responsive"
								alt="img"
							/>
						</div>
						<div className="blog_text blog_cate_text">
							<h5>
								<a href="#"> marine doe</a>
							</h5>
							<div className="blog_date blog_date_2">
								<i className="fa fa-phone" aria-hidden="true" />+91 12345 63320
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
