import React from "react";

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			homeLink: "Changed Link",
			status: 0
		}
	}

	makeMeOlder() {
		this.setState({
			age: this.state.age + 3
		})
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	render() {
		return (
			<div>
				<h1>In a new component!</h1>
				<p>Your name is : {this.props.name}</p>
				<p>Your age is : {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<button className="btn btn-primary" onClick={this.makeMeOlder.bind(this)}>Make me older</button>
				<button className="btn btn-primary" onClick={() => this.makeMeOlder()}>Make me older</button>
				<button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
				<button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Link Name</button>
			</div>
		);
	}
}

Home.PropTypes = {
	job: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func
};