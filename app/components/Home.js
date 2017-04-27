import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Proptypes from 'prop-types';
import Nav from './Nav';
import HomeSearch from './HomeSearch';
import Body from './Body';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posterImg: "../app/styles/images/palmtrees.png",
			backVideo: "../app/styles/images/palmtrees.mp4",
		}
	}


	render(){
		return (
			<div className="bodyContainer">
				<HomeSearch 
					posterImg={this.state.posterImg} 
					backVideo={this.state.backVideo}
					leftSearch={"10%"}
					searchPage={"Buy"} />
		
			</div>
		)
	}
}

export default Home;