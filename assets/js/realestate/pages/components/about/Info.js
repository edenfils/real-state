import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Info extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="abt_city_infra">
				<div className="about_wrapper" />
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box heading_white_wrapper">
									<div className="tb_left_heading_wraper">
										<h3>what is city infra</h3>
									</div>
									<p>
										Fusce ec tincidunt ipsumelit. vel orciarel gravida rpis nibh
										nec, tincidunt ip et sem elementum, mis nibh nec, tincidunt
										ipsum etiau nec tincidunt ipsumelit. vel orciarel gravida
										rpis. Quisque sitmi tincidunt ipsum etiau.
									</p>
									<div className="abt_checkbox">
										<ul>
											<li>
												<a href="#">
													<i className="fa fa-check-square" />
													2000+ Houses and Aparments
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-check-square" />
													booking option avalible
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-check-square" />
													Map Search and Get Distance
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-check-square" />
													Save Your Facetious Listing
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-check-square" />
													24/7 Our Top Agent Available
												</a>
											</li>
										</ul>
									</div>
									<div className="abt_btn">
										<ul>
											<li>
												<a href="#">see all demos</a>
											</li>
											<li>
												<a href="#">buy now</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
							<div className="gc_blog_index_img_wrapper">
								<iframe src="https://www.youtube.com/embed/BQdOsEw0HgM" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
