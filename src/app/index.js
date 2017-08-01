import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';


import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";

class App extends React.Component {
	render() {
		return (
			<Router history={createBrowserHistory}>
				<div>
					<Route component={Root} />
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	};
}

render( <App/>, window.document.getElementById("app"));
