import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<header>
					<div className="serach-header">
						<div className="searchbox">
							<button className="close">×</button>
							<form>
								<input type="search" placeholder="Search …" />
								<button type="submit">
									<i className="fa fa-search" />
								</button>
							</form>
						</div>
					</div>
					<div className="topbar">
						<div className="container">
							<div className="row">
								<div className="topheader_bg">
									<div className="top_header_add hidden-xs hidden-sm">
										<ul>
											<li>
												<i className="fa fa-phone" aria-hidden="true" /> + 1800.
												12345. 67890
											</li>
											<li>
												<a href="#">
													<i className="fa fa-envelope" aria-hidden="true" />{' '}
													mail@website.com
												</a>
											</li>
										</ul>
									</div>
									<div className="social_links_wrapper">
										<div className="social_links">
											<ul>
												<li>
													<a href="#">
														<i className="fa fa-facebook-square" />
													</a>
												</li>
												<li>
													<a href="#">
														<i className="fa fa-twitter-square" />
													</a>
												</li>
												<li>
													<a href="#">
														<i className="fa fa-google-plus-square" />
													</a>
												</li>
												<li className="hidden-xs">
													<a href="#">
														<i className="fa fa-youtube-square" />
													</a>
												</li>
												<li className="hidden-xs">
													<a href="#">
														<i className="fa fa-pinterest-square" />
													</a>
												</li>
												<li className="dropdown">
													<a
														href="#"
														id="dropdownMenuLink"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<img src="img/flag.png" alt="Flag" title="Flag" />
														<i className="fa fa-caret-down" />
													</a>
													<div
														className="dropdown-menu"
														aria-labelledby="dropdownMenuLink"
													>
														<a className="dropdown-item" href="#">
															<img src="img/flag.png" alt="Flag" title="Flag" />{' '}
															Hebrew
														</a>
														<a className="dropdown-item" href="#">
															<img src="img/flag.png" alt="Flag" title="Flag" />
															Spanish
														</a>
														<a className="dropdown-item" href="#">
															<img src="img/flag.png" alt="Flag" title="Flag" />
															Russian
														</a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="transparent-menu header-area hidden-menu-bar stick">
						<div className="container">
							<div className="row">
								<div className="bt_main_menu_wrapper">
									<div className="main-menu-wrapper clear-fix">
										<div className="logo float-left">
											<a href="home_slider.html">
												<img src="img/top_logo.png" alt="LOGO" />
											</a>
										</div>
									</div>

									<div className="sc_navigation hidden-sm hidden-xs">
										<nav id="primary-nav" className="dropdown nav_left_margin">
											<ul>
												<li>
													<a href="#" title="">
														home
													</a>
												</li>

												<li className="dropdown">
													<a href="#" title="property_listing_sidebar.html">
														Listings
													</a>
												</li>

												<li>
													<a href="#" title="">
														About Us
													</a>
												</li>
												<li>
													<a href="contact_us.html" title="">
														contact us
													</a>
												</li>
											</ul>
										</nav>
									</div>

									<div className="mobile-menu-area visible-sm visible-xs">
										<div className="container">
											<div className="row">
												<div className="col-xs-12 cc_menu_top_margin">
													<div className="mobile-menu">
														<nav>
															<ul className="nav">
																<li>
																	<a href="#" title="">
																		Home
																	</a>
																</li>

																<li>
																	<a href="#">Listings</a>
																</li>

																<li>
																	<a href="#" title="">
																		About Us
																	</a>
																</li>
																<li>
																	<a href="contact_us.html" title="">
																		contact us
																	</a>
																</li>
															</ul>
														</nav>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
