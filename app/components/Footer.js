import React from 'react';


export default class Footer extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			display: 'none',
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		if(this.state.display === 'none'){
			this.setState({display: 'block'})
		} 
		if(e.target.className == 'close' || e.target.className == 'credits'){
			this.setState({display: 'none'})
		}
		
	}


	render(){
		return (
			<div className="footerContainer">
				<h4> This webpage has no affiliation with <a href="https://www.zillow.com" target='_blank'>© Zillow.com </a> and has no commercial value. </h4>
				<p>Built by <a href="https://github.com/davemflick" target="_blank">David Flick</a> for basic front end practice.</p>
				<p> A list of <button onClick={this.handleClick}> credits </button></p>
				<div id="creditPopUp" className="credits" style={{display: this.state.display}} onClick={this.handleClick}>
				  <div className="credit-content">
				    <span className="close" onClick={this.handleClick}>Close</span>
				   <h4>Videos and Images</h4>
				   	<ul>
				   		<li><a href='https://www.zillow.com' target='_blank'>Zillow.com</a></li>
				   		<li><a href='https://www.videezy.com/nature/3960-palm-trees-blowing-in-the-wind-4k' target='_blank'>Palm Trees:</a> Videezy.com </li>
				   		<li><a href='https://www.videezy.com/industry/4327-unfinished-building-and-the-cloouds-4k-stock-video' target='_blank'>Apartments:</a> Videezy.com </li>
				   		<li><a rel="nofollow" target="_blank" href="http://Videezy.com">City: </a> Videezy.com </li>
				   		<li><a href='http://www.freeiconspng.com/png-images/house-png' target='_blank'>House1: </a> FreeIcons </li>
				   		<li><a href='http://simpsonstappedout.wikia.com/wiki/Simpson_House' target='_blank'>House2: </a> fandom </li>
				   		<li><a href='http://www.freeiconspng.com/png-images/house-png' target='_blank'>House3: </a> FreeIcons </li>
				   		<li><a href='http://www.bizjournals.com/twincities/news/2016/08/01/nyes-polonaise-sale-montage-apartments-project.html#i1' target='_blank'>Rental1: </a> bizjournals</li>
				   		<li><a href='http://urbanize.la/post/seven-west-apartments-prepare-debut-2017' target='_blank'>Rental2: </a> urbanize.LA </li>
				   		<li><a href='https://www.avaloncommunities.com/massachusetts/boston-apartments/avalon-at-prudential-center' target='_blank'>Rental3: </a> Avalon </li>
				   		<li><a href='https://www.w3schools.com/howto/howto_css_modals.asp' target='_blank'>Modal Box </a> w3schoools </li>
				   	</ul>
				  </div>

				</div>
			</div>
		)
	}
}