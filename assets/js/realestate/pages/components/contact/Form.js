import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="contact_iner_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box heading_center">
									<div className="tb_left_heading_wraper heading_center_line contact_heading_section">
										<h3>
											if you got any questions, please do not <br />
											hesitate to send us a message
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="contact_section">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12 col-sm-12">
								<form>
									<div className="row">
										<div className="col-md-12">
											<div className="contact_section-pos">
												<div className="form-group i-name">
													<input
														type="text"
														className="form-control"
														required=""
														id="namTen-first"
														placeholder="your name"
													/>
												</div>
											</div>
											<div className="contact_section-e">
												<div className="form-group i-email">
													<input
														type="email"
														className="form-control"
														required=""
														id="emailTen"
														placeholder=" your Email"
													/>
												</div>
											</div>
											<div className="contact_section-p">
												<div className="form-group i-phone">
													<input
														type="text"
														className="form-control"
														required=""
														id="phoneTen"
														placeholder="your Phone"
													/>
												</div>
											</div>

											<div className="contact_section-m">
												<div className="form-group i-message">
													<textarea
														className="form-control"
														required=""
														rows="2"
														id="messageTen"
														placeholder="Write Message"
													/>
												</div>
											</div>
											<button type="submit" className="btn btn-primary">
												Send your Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
