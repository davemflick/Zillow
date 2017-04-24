import React from 'react';


export default class HomeSearch extends React.Component {

	render(){
		return (
			<div className="homeSearch container">
				<video className="videoBack" poster="../app/styles/images/palmtrees.png" autoPlay="true" loop>
					<source src="../app/styles/images/palmtrees.mp4" type="video/mp4"/>
				</video>
				<div className="searchBar">
					<div className="searchOptionBtns">
						<button className="searchOpt" type="button">Buy</button>
						<button className="searchOpt" type="button">Rent</button>
						<button className="searchOpt" type="button">Sell</button>
						<button className="searchOpt" type="button">Zestimate</button>
					</div>
					<div className="searchField">
						
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