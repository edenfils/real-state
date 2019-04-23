import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Deals extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="deals_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
							<div className="tb_work_txt_wrapper">
								<div className="abt_txt_box">
									<div className="tb_left_heading_wraper">
										<h3>the best property finder site</h3>
									</div>
									<p>
										Aliquam ornare, turpis non eleifend semper, purus magna
										tincidunt tellus, at odo uam risus a est. aliqu erat
										volutpat. Aenean volutpat leo pellentesque, finibus ol
										sollicitudin augue. Aliquam ornare, turpis non eleifend
										semper, purus magna nt tellus, at commodo uam risus a est.
										aliqu erat volutpat. Aenean volutpat leo pellentesque,
										finibus necol sollicitudin augue.
										<br />
										<br /> ipsumelit. Cras vel dui vel orciarel gravida.rpis.
										Quisque sitmi tincidunt ipsum et sem elementum, mis nibh
										nec, tincidunt ipsum etiau eu ornare, turpis non eleifend
										semper, purus magna nt tellus, at commodo uam ctor turpis.
										Quisque sitmi lementum, mis nibh nec, tincidunt ipsumelit.
										Cras vel
									</p>
									<i>
										<a href="#">http://webstrot.com/</a>
									</i>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
							<div className="abt_iner_img">
								<img
									src="img/abt_right_img.png"
									alt="home"
									className="img-responsive"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
