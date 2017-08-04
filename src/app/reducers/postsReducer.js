const initialState = {
	fetching: false,
	fetched: false,
	posts: [],
	error: false
};

const postsReducer = ( state = initialState, action ) => {

	switch ( action.type ) {

		case "FETCH_POSTS_PENDING": {

			state = {
				...state,
				fetching: true
			};
			break;

		}

		case "FETCH_POSTS_FULFILLED": {

			state = {
				...state,
				fetching: false,
				fetched: true,
				posts: [ ...state.posts,action.payload ]
			};
			break;

		}

		case "FETCH_POSTS_REJECTED": {

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

export default postsReducer;