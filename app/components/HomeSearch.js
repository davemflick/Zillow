import React from 'react';
import { Redirect } from 'react-router-dom'


export default class HomeSearch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			left: '10%',
			active: 'searchOpt active',
			inactive: 'searchOpt',
			searchTypes: ['Buy', 'Rent', 'Sell', 'Zestimate'],
			searchPage: this.props.searchPage,
		}
	}


	createButtons(){
		let types = this.state.searchTypes;
		let sP = this.state.searchPage;
		let btnArr = [];
		for(let i=0; i<types.length; i++){
			types[i] === sP ?
			btnArr.push(<button key={i} className={this.state.active}>{types[i]}</button>) :
			btnArr.push(<button key={i} className={this.state.inactive}>{types[i]}</button>)
		}
		return btnArr.map(btn=>  btn)
	}

	handleSearchCatagory(e){
		e.target.className = this.state.active;
		let catagory = e.target.innerHTML;
		switch(catagory){
			case "Buy":
				e.target.nextSibling.className = this.state.inactive;
				e.target.nextSibling.nextSibling.className = this.state.inactive;
				e.target.nextSibling.nextSibling.nextSibling.className = this.state.inactive;
				this.setState({left: '10%'})
				break;
			case "Rent":
				e.target.nextSibling.className = this.state.inactive;
				e.target.nextSibling.nextSibling.className = this.state.inactive;
				e.target.previousSibling.className = this.state.inactive;
				this.setState({left: '35%'})
				break;
			case "Sell":
				e.target.nextSibling.className = this.state.inactive;
				e.target.previousSibling.previousSibling.className = this.state.inactive;
				e.target.previousSibling.className = this.state.inactive;
				this.setState({left: '60%'})
				break;
			case "Zestimate":
				e.target.previousSibling.previousSibling.previousSibling.className = this.state.inactive;
				e.target.previousSibling.previousSibling.className = this.state.inactive;
				e.target.previousSibling.className = this.state.inactive;
				this.setState({left: '85%'})
				break;
			default:
			console.log("oh farts");
		 }	
		 this.createButtons();
	}


	render(){
		return (
			<div className="homeSearch container">
				<div className="videoContainer">
					<video className="videoBack" poster={this.props.posterImg} autoPlay="true" loop>
						<source src={this.props.backVideo} type="video/mp4"/>
					</video>
				</div>
				<div className="warning">This website is FAKE.. It is a Mock-up for development practice.</div>
				<div className="searchBar">
					<div className="searchOptionBtns" onClick={this.handleSearchCatagory.bind(this)}>
						{this.createButtons()}
					</div>
					<div className="searchField">
							<div className="catPointer" style={{'left': this.state.left}}></div>
							<input 
								className="searchInput" 
								type="text" 
								name="search" 
								placeholder="Input an Address, City or Zip Code!"/> 
							<button className="submitSearch" type='button'> Search </button>
					</div>
				</div>
			</div>

		)
	}
}