import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Proptypes from 'prop-types';
import Nav from './Nav';
import HomeSearch from './HomeSearch';


class BuyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posterImg: "../app/styles/images/city.png",
			backVideo: "../app/styles/images/city.mp4",
		}
	}

	render(){
		return (
			<div>
				<HomeSearch 
					posterImg={this.state.posterImg} 
					backVideo={this.state.backVideo}
					leftSearch={'10%'}
					searchPage={"Buy"} />
			</div>
		)
	}
}

export default BuyPage;