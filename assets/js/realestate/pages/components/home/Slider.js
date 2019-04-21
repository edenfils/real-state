import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Slider extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="slider_wrapper">
					<div className="slider_overlay" />
					<div id="theme-main-banner">
						<div data-src="img/slider_img.jpg">
							<div className="camera_caption">
								<div className="container">
									<div className="slider_cntnt">
										<h1 className="wow fadeInUp animated" data-wow-delay="0.0s">
											733/539 St Kilda Road
										</h1>
										<h4 className="wow fadeInUp animated" data-wow-delay="0.0s">
											Melbourne, Vic 3004
										</h4>
										<p className="wow fadeInUp animated" data-wow-delay="0.0s">
											{' '}
											<sup>$ </sup>270,999<span> per month </span>
										</p>
									</div>
									<div
										className="pst_btn_form slider_btn_wraper wow fadeInUp animated"
										data-wow-delay="0.0s"
									>
										<ul>
											<li>
												<a href="#">read more</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div data-src="img/slider_img.jpg">
							<div className="camera_caption">
								<div className="container">
									<div className="slider_cntnt">
										<h1 className="wow fadeInUp animated" data-wow-delay="0.0s">
											733/539 St Kilda Road
										</h1>
										<h4 className="wow fadeInUp animated" data-wow-delay="0.0s">
											Melbourne, Vic 3004
										</h4>
										<p className="wow fadeInUp animated" data-wow-delay="0.0s">
											{' '}
											<sup>$ </sup>270,999<span> per month </span>
										</p>
									</div>
									<div
										className="pst_btn_form slider_btn_wraper wow fadeInUp animated"
										data-wow-delay="0.0s"
									>
										<ul>
											<li>
												<a href="#">read more</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div data-src="img/slider_img.jpg">
							<div className="camera_caption">
								<div className="container">
									<div className="slider_cntnt">
										<h1 className="wow fadeInUp animated" data-wow-delay="0.0s">
											733/539 St Kilda Road
										</h1>
										<h4 className="wow fadeInUp animated" data-wow-delay="0.0s">
											Melbourne, Vic 3004
										</h4>
										<p className="wow fadeInUp animated" data-wow-delay="0.0s">
											{' '}
											<sup>$ </sup>270,999<span> per month </span>
										</p>
									</div>
									<div
										className="pst_btn_form slider_btn_wraper wow fadeInUp animated"
										data-wow-delay="0.0s"
									>
										<ul>
											<li>
												<a href="#">read more</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="slider_botm_box" />
				</div>
			</div>
		);
	}
}
