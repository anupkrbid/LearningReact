import { createStore } from "redux";

const reducer = function ( state, action) {

	if ( action.type === 'ADD' ) {

		return (state + action.payload);

	} else if ( action.type === 'SUB' ) {

		return (state - action.payload);

	}
	return state;
};

const store = createStore ( reducer, 0);

store.subscribe ( () => console.log( 'State Changed', store.getState() ) );

store.dispatch ( {
	type: "ADD",
	payload: 10
} );

store.dispatch ( {
	type: "ADD",
	payload: 10
} );

store.dispatch ( {
	type: "SUB",
	payload: 5
} );