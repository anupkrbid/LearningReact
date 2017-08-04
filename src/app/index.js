import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";



const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: false
};

const userReducer = ( state = initialState, action ) => {

	switch ( action.type ) {

		case "CHANGE_NAME": {

			state = {
				...state,
				name: action.payload
			};
			break;

		}

		case "CHANGE_AGE": {

			state = {
				...state,
				age: action.payload
			};
			break;

		}

		case "E": {

			throw new Error( "Custom Error Handler" );
			break;

		}

		case "FETCH_USERS_START": {

			state = {
				...state,
				fetching: true
			};
			break;

		}

		case "RECEIVE_USERS": {

			state = {
				...state,
				fetching: false,
				fetched: true,
				users: [ ...state.users,action.payload ]
			};
			break;

		}

		case "FETCH_USERS_ERROR": {

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

// const tweetReducer = ( state = [], action ) => {
//
// 	return state;
//
// };

const reducers = combineReducers( {
	user: userReducer
	// tweet: tweetReducer
} );

const error = (store) => (next) => (action) => {

	try {

		next(action);

	} catch ( e ) {

		console.log( "Error: ", e );

	}

};

const store = createStore ( reducers, applyMiddleware( thunk, logger ) );

store.subscribe ( () => console.log( 'State Changed', store.getState() ) );

// store.dispatch ( {
// 	type: "CHANGE_NAME",
// 	payload: "Will"
// } );
//
// store.dispatch ( {
// 	type: "CHANGE_AGE",
// 	payload: 35
// } );

// store.dispatch ( {
// 	type: "E",
// 	payload: 35
// } );

store.dispatch ( ( dispatch ) => {

	dispatch ( { type: "FETCH_USERS_START" } )
	axios.get ( "https://jsonplaceholder.typicode.com/users/1" )
		.then ( ( response ) => {
			dispatch ( {
				type: "RECEIVE_USERS",
				payload: response
			} )
		} )
		.catch ( ( error ) => {
			dispatch ( {
				type: "FETCH_USERS_ERROR",
				payload: error
			} )
		} )


} );