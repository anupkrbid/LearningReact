const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: false
};

const usersReducer = ( state = initialState, action ) => {
	// console.log(action);
	switch ( action.type ) {

		case "FETCH_USERS_PENDING": {

			state = {
				...state,
				fetching: true
			};
			break;

		}

		case "FETCH_USERS_FULFILLED": {

			state = {
				...state,
				fetching: false,
				fetched: true,
				users: [ ...state.users,action.payload ]
			};
			break;

		}

		case "FETCH_USERS_REJECTED": {

			state = {
				...state,
				fetched: true,
				fetching: false,
				error: action.payload
			};
			break;

		}

	}

	return state;

};

export default usersReducer;