import React from 'react';


export default class HomeSearch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			left: "10%",
			active: 'searchOpt active',
			inactive: 'searchOpt',
			searchTypes: ['Buy', 'Rent', 'Sell', 'Zestimate'],
		}
	}

	createButtons(act){
		let types = this.state.searchTypes;
		let btnArr = [];
		for(let i=0; i<types.length; i++){
			i === act ?
			btnArr.push(<button key={i} className={this.state.active} type="button">{types[i]}</button>) :
			btnArr.push(<button key={i} className={this.state.inactive} type="button">{types[i]}</button>)
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
				this.setState({left: '10%'});
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

	}


	render(){
		return (
			<div className="homeSearch container">
				<video className="videoBack" poster="../app/styles/images/palmtrees.png" autoPlay="true" loop>
					<source src="../app/styles/images/palmtrees.mp4" type="video/mp4"/>
				</video>
				<div className="warning">This website is FAKE.. It is a Mock-up for development practice.</div>
				<div className="searchBar">
					<div className="searchOptionBtns" onClick={this.handleSearchCatagory.bind(this)}>
						{this.createButtons(0)}
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