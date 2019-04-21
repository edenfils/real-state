import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Testimonial extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="our_client_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 col-lg-offset-3">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box heading_center">
									<div className="tb_left_heading_wraper heading_center_line">
										<h3>our clients say</h3>
									</div>
									<p>
										Fusce et sem elementum, mis nibh nec, tincidunt ipsum etiau
										eu ctor turpis. Quisque Cras vel gravida.rpis. Quisque sitmi
										tincidunt ipsum etiau.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
							<div className="testimonial_slider">
								<div className="carousel-item">
									<div className="card  valign-wrapper">
										<div className="card-image">
											<img src="img/client_1.jpg" alt="img" />
										</div>

										<div className="card-content center-align valign">
											<p>
												{' '}
												“ I don't always clap, but when I do, it's because of
												Sella. We can't understand how we've been living without
												Sella. ”
											</p>

											<p className="card-title">
												lara Smith <span>CEO</span>
											</p>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<div className="card  valign-wrapper">
										<div className="card-image">
											<img src="img/client_2.jpg" alt="img" />
										</div>

										<div className="card-content center-align valign">
											<p>
												“ I don't always clap, but when I do, it's because of
												Sella. We can't understand how we've been living without
												Sella. ”{' '}
											</p>

											<p className="card-title">
												michel sem <span>buyer</span>
											</p>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<div className="card  valign-wrapper">
										<div className="card-image">
											<img src="img/client_3.jpg" alt="img" />
										</div>

										<div className="card-content center-align valign">
											<p>
												{' '}
												“ I don't always clap, but when I do, it's because of
												Sella. We can't understand how we've been living without
												Sella. ”{' '}
											</p>

											<p className="card-title">
												Jonh Smith <span>support manager</span>
											</p>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<div className="card  valign-wrapper">
										<div className="card-image">
											<img src="img/client_4.jpg" alt="img" />
										</div>

										<div className="card-content center-align valign">
											<p>
												“ I don't always clap, but when I do, it's because of
												Sella. We can't understand how we've been living without
												Sella. ”
											</p>

											<p className="card-title">
												Jonh Smith <span>chairman</span>
											</p>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<div className="card  valign-wrapper">
										<div className="card-image">
											<img src="img/client_2.jpg" alt="img" />
										</div>

										<div className="card-content center-align valign">
											<p>
												{' '}
												“ I don't always clap, but when I do, it's because of
												Sella. We can't understand how we've been living without
												Sella. ”{' '}
											</p>

											<p className="card-title">
												selina doe <span>buyer</span>
											</p>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<div className="card  valign-wrapper">
										<div className="card-image">
											<img src="img/client_1.jpg" alt="img" />
										</div>

										<div className="card-content center-align valign">
											<p>
												{' '}
												“ I don't always clap, but when I do, it's because of
												Sella. We can't understand how we've been living without
												Sella. ”
											</p>

											<p className="card-title">
												Jonh Smith <span>CEO, Apple Inc</span>
											</p>
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
