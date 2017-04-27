import React from 'react';
import Proptypes from 'prop-types';
export default class Nav extends React.Component {

	handlePageLink() {
		alert("Page Links Invalid, This is a single Page App");
	}

	render(){
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			      <div className="navbar-header">
      				<a className="navbar-brand" href="#">
        			  <img className="zillowPNG" alt="Brand" src="../app/styles/images/zillow.png"/>
     				 </a>
     				 <button type="button" className="collapseNav" data-toggle="collapse" data-target=".navbar-collapse">
			          <span className="sr-only">toggle navigation</span>
			          	<span className='leftArrow'>⬅︎ </span>
			          	<img className="zillowPNGsmall" alt="Brand" src="../app/styles/images/zillow2.png"/>
			     	 </button>
     			  </div>
     			    <ul className="nav navbar-nav navbar-left collapse navbar-collapse" onClick={this.handlePageLink}>
			          <li><a className='pdLink' href="#">Buy</a></li>
			          <li><a className='pdLink' href="#">Rent</a></li>
			          <li><a className='pdLink' href="#">Sell</a></li>
			          <li><a className='pdLink' href="#">Mortgages</a></li>
			          <li><a className='pdLink' href="#">Agent finder</a></li>
			          <li><a className='pdLink' href="#">Home design</a></li>
			          <li><a className='pdLink' href="#">More</a></li>
				    </ul>
				    <ul className="nav navbar-nav navbar-right">
				      <li><a className="logInIcon" href="#logIn">👤 </a></li>
				      <li><a href="#"><button className="signIn long" type="text">Sign in</button></a></li>
				      <li><a href="#"><p className="long"> or </p></a></li>
				      <li><a href="#"><button className="join long" type="text"> Join </button></a></li>
				    </ul>
     		  </div>
			</nav>
		)
	}

}