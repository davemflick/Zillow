import React from 'react';
import Proptypes from 'prop-types';
export default class Nav extends React.Component {

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
     			    <ul className="nav navbar-nav navbar-left collapse navbar-collapse">
			          <li><a className='pdLink' href="#buy">Buy</a></li>
			          <li><a className='pdLink' href="#rent">Rent</a></li>
			          <li><a className='pdLink' href="#sell">Sell</a></li>
			          <li><a className='pdLink' href="#mortgages">Mortgages</a></li>
			          <li><a className='pdLink' href="#agentFinder">Agent finder</a></li>
			          <li><a className='pdLink' href="#homeDesign">Home design</a></li>
			          <li><a className='pdLink' href="#more">More</a></li>
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