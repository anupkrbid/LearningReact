import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import usersReducer from "./reducers/usersReducer";
import postsReducer from "./reducers/postsReducer";


/** All Reducers */
const reducers = combineReducers( { usersReducer, postsReducer } );

/** All Used Middlewares */
const middlewares = applyMiddleware( thunk, promise(), logger );

/** Creating a Store */
export default createStore ( reducers, middlewares );

// const store =  createStore ( reducers, middleware );
// export default { store };