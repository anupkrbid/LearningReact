import React from "react";

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0
		}
	}

	makeMeOlder() {
		this.setState({
			age: this.state.age + 3
		})
	}

	render() {
		return (
			<div>
				<h1>In a new component!</h1>
				<p>Your name is : {this.props.name}</p>
				<p>Your age is : {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<button className="btn btn-primary" onClick={this.makeMeOlder.bind(this)}>Make me older</button>
				<br/>
				<button className="btn btn-primary" onClick={() => this.makeMeOlder()}>Make me older</button>
			</div>
		);
	}
}

Home.PropTypes = {
	job: React.PropTypes.string,
	initialAge: React.PropTypes.number
};