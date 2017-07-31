import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	render() {
		var obj = {
			name: "Anup",
			hobbies: [ 'playing', 'sleeping', 'coding']
		};
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<Home job="Developer" obj={obj} age={5}>
							<div>
								<p>This Is a paragraph!</p>
							</div>
						</Home>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('app'));