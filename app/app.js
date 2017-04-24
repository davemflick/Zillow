import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Nav from './components/Nav';
import HomeSearch from './components/HomeSearch';


class App extends React.Component {

	render(){
		return (
			<div>
				<Nav />
				<HomeSearch/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));