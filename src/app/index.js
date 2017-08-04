import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";


const userReducer = ( state = {}, action ) => {

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
	}
	return state;

};

const tweetReducer = ( state = [], action ) => {

	return state;

};


let obj = {
	user: {
		name: "Sam",
		age: 21
	},
	tweets: []
};

const reducers = combineReducers( {
	user: userReducer,
	tweet: tweetReducer
} );

const error = (store) => (next) => (action) => {

	try {

		next(action);

	} catch ( e ) {

		console.log( "Error: ", e );

	}

};

const store = createStore ( reducers, applyMiddleware( logger ) );

store.subscribe ( () => console.log( 'State Changed', store.getState() ) );

store.dispatch ( {
	type: "CHANGE_NAME",
	payload: "Will"
} );

store.dispatch ( {
	type: "CHANGE_AGE",
	payload: 35
} );

// store.dispatch ( {
// 	type: "E",
// 	payload: 35
// } );