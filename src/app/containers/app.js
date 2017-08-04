import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersAction";


class App extends Component {

	componentDidMount() {
		// console.log("componentDidMount",this.props)
		this.props.fetchUsers();
	}

	render() {
		return (
			<div>
				<h1>App Component</h1>
				<div>
					<p>{this.props.users.users.name}</p>
				</div>

			</div>
		);
	}
}

const mapStateToProps = ( state ) => {

	return ( {
		users: state.usersReducer,
		posts: state.postsReducer
	} );

};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => {
			dispatch(fetchUsers);
		}
	};
};

export default connect ( mapStateToProps, mapDispatchToProps )( App );