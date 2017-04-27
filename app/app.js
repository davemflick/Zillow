import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import routes from './router';
import Nav from './components/Nav';
import HomeSearch from './components/HomeSearch';
// import BuyPage from './components/BuyPage';
// import RentPage from './components/RentPage';
import Body from './components/Body';


class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			posterImg: "../app/styles/images/palmtrees.png",
			backVideo: "../app/styles/images/palmtrees.mp4",
		}
	}

	render() {
		return (
		<div>
			<Nav />
			<HomeSearch
				className="dick"
				posterImg={this.state.posterImg} 
				backVideo={this.state.backVideo}
				searchPage={"Buy"} />
			<Body />
			
		</div>
		)
	}
}


ReactDOM.render(<App />,document.getElementById("app"))
	

