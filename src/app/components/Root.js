import React, { Component } from "react";

import { Header } from "./Header.js";


export class Root extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<Header/>
					</div>
				</div>
				<div className="col-md-10 col-md-offset-1">
					{ this.props.children }
				</div>
			</div>
		);
	}
}