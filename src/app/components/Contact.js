import React, { Component } from "react";


export class Contact extends Component {

	changeLink() {
		history.push('/');
	}
	render(){
		return (
			<div className="container">
				<div className="row">
					<h1>Contact!</h1>
				</div>
				<button onClick={this.changeLink} className="btn btn-primary"> Go to Home </button>
			</div>
		);
	}
}