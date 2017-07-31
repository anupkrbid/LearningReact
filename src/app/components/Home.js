import React from "react";

export class Home extends React.Component {
	render() {
		var text = "Something!";
		return (
			<div>
				<h1>In a new component!</h1>
				<p>{text}</p>
				<p>{this.props.job}</p>
				<p>Your name is : {this.props.obj.name}</p>
				<p>Your age is : {this.props.age}</p>
				<h2>Hobies</h2>
				<ul>
					{this.props.obj.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
				</ul>
				<hr/>
				{this.props.children}
			</div>
		);
	}
}

Home.PropTypes = {
	job: React.PropTypes.string,
	age: React.PropTypes.number,
	obj: React.PropTypes.object,
	childern: React.PropTypes.element.isRequired
};