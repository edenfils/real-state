import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="dreams-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-md-9 col-xs-12 col-sm-12">
								<div className="dreams-title">
									<h2>do you have any questions , doubts or enquiry ?</h2>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
								<div className="abt_btn enquiry_btn">
									<ul>
										<li>
											<a href="#">contact us</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_wrapper">
					<div className="section3_wrapper_second">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
									<div className="wrapper_second_contact">
										<h4>get in touch</h4>
										<ul>
											<li>
												<i className="fa fa-map-marker" />
												<p>PO Box 16122 Collins Street West Victoria 8007</p>
											</li>
											<li>
												<i className="fa fa-phone" />
												<p>+61 3 8376 6284</p>
											</li>
											<li>
												<i className="fa fa-mobile" />
												<p>+61 3 8876 1104</p>
											</li>
											<li>
												<i className="fa fa-envelope" />
												<a href="#">email@website.com</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
									<div className="wrapper_second_blog">
										<h4>our agents</h4>
										<div className="blog_wrapper1">
											<div className="blog_image blog_image_2">
												<img
													src="img/client_3.jpg"
													className="img-responsive"
													alt="img"
												/>
											</div>
											<div className="blog_text">
												<h5>
													<a href="#">Rihanna Alexander</a>
												</h5>
												<div className="blog_date">
													<i className="fa fa-phone" aria-hidden="true" />
													+91 12345 67890
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
											<div className="blog_text">
												<h5>
													<a href="#"> Alex doe</a>
												</h5>
												<div className="blog_date">
													<i className="fa fa-phone" aria-hidden="true" />
													+91 12345 63320
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
											<div className="blog_text">
												<h5>
													<a href="#"> marine doe</a>
												</h5>
												<div className="blog_date">
													<i className="fa fa-phone" aria-hidden="true" />
													+91 12345 63320
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
									<div className="wrapper_second_useful">
										<h4>usefull links</h4>
										<ul>
											<li>
												<a href="#">
													<i className="fa fa-caret-right" aria-hidden="true" />
													our agents
												</a>{' '}
											</li>
											<li>
												<a href="#">
													<i className="fa fa-caret-right" aria-hidden="true" />
													about us{' '}
												</a>{' '}
											</li>
											<li>
												<a href="#">
													<i className="fa fa-caret-right" aria-hidden="true" />
													contact us
												</a>{' '}
											</li>
										</ul>
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
