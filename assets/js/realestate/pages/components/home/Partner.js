import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Partner extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="partner_wrapper">
				<div className="container">
					<div className="partner_slider">
						<div className="owl-carousel owl-theme">
							<div className="item">
								<img src="img/patner_1.png" alt="img" />
							</div>
							<div className="item">
								<img src="img/patner_2.png" alt="img" />
							</div>
							<div className="item">
								<img src="img/patner_3.png" alt="img" />
							</div>
							<div className="item">
								<img src="img/patner_4.png" alt="img" />
							</div>
							<div className="item">
								<img src="img/patner_5.png" alt="img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
