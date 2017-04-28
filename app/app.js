import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import routes from './router';
import Nav from './components/Nav';
import HomeSearch from './components/HomeSearch';
// import BuyPage from './components/BuyPage';
// import RentPage from './components/RentPage';
import Body from './components/Body';
import axios from 'axios';



//Your Zillow Web Services Identification (ZWSID) is: X1-ZWz1985no7x34b_17jma


class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			posterImg: "../app/styles/images/palmtrees.png",
			backVideo: "../app/styles/images/palmtrees.mp4",
		}
	}


	// componentWillMount(){
	// const URL = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1985no7x34b_17jma&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";
	// 	$.ajax({
	// 		url: URL,
	// 		type: 'POST',
	// 		crossDomain: true,
	// 		  contentType: 'text/plain',
 //                    xhrFields: { ithCredentials: false },
 //                    headers: {'Accept':'application/json'},
 //                    dataType: 'jsonp',
	// 		success: (data)=> console.log(data),
	// 		error: err => console.error(err),
	// 	})
		
	// }

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
	

