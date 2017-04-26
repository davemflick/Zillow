import React, { Component } from 'react';
import Nav from './Nav';
import HomeSearch from './HomeSearch';


class RentPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posterImg: "../app/styles/images/apartment.png",
			backVideo: "../app/styles/images/apartment.mp4",
		}
	}

	render(){
		return (
				<HomeSearch 
					posterImg={this.state.posterImg} 
					backVideo={this.state.backVideo}
					leftSearch={"35%"}
					searchPage={"Rent"} />
		)
	}
}

export default RentPage;