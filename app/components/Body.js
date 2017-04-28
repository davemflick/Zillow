import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Body extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			homes: [
				{className: 'property1',
				type: 'For Sale',
				price: '$440K',
				propFeat: '4bds. 2ba. 2,500sqft',
				descrip: '0 days on Zillow. 123 S Fake St. Anytown, USA'},
				{className: 'property2',
				type: 'For Sale',
				price: '$390K',
				propFeat: '4bds. 3ba. 2,245sqft',
				descrip: '0 days on Zillow. 321 N Simpson Blvd. Springfield, USA '},
				{className: 'property3',
				type: 'For Sale',
				price: '$270K',
				propFeat: '3bds. 4ba. 1,900sqft',
				descrip: "0 days on Zillow. 53252 Doesn't Exist Rd fakeCity, USA "},
			],
			rentals: [
				{className: 'rental1',
				type: 'For Rent',
				price: '$1350',
				propFeat: '3bds. 1.5ba. 1,800sqft',
				descrip: '0 days on Zillow. 3089 That One Street, Somewhere, USA'},
				{className: 'rental2',
				type: 'For Rent',
				price: '$1195',
				propFeat: '2bds. 2ba. 1,640sqft',
				descrip: '0 days on Zillow. 414 GO PACK GO. Title Town, USA '},
				{className: 'rental3',
				type: 'For Rent',
				price: '$1675',
				propFeat: '3bds. 2ba. 1,950sqft',
				descrip: "0 days on Zillow. 2233 Badger St. Silly Town, USA "},
			]
		}

	}

	createList (list) {
		let listArr= [];
		for(var key in list){
			listArr.push(<div key={key} className={"property " + list[key].className}>
				<div className='propDetails'>
					<div ><div className={list[key].type}/>{"  " + list[key].type}</div>
					<div className="priceDesc">
						<h3 className="price">{list[key].price} </h3>
						<p className='propFeat'>{list[key].propFeat}</p>
					</div>
					<p className="propDescrip"> {list[key].descrip} </p>
				</div>
			</div>)
		}

		return listArr.map(home=> home);

	}


	render(){
		return(
			<div className="bodyContainer">
				<div className='availProp'>
					<h1>Homes for Sale</h1>
					<p> 83 listings in Your Location </p>
					<div className="properties">
						{this.createList(this.state.homes)}
					</div>
				</div>
				<div className='availRentals'>
					<h1>Rental Listings</h1>
					<p> 35 listings in Your Location </p>
					<div className="properties">
						{this.createList(this.state.rentals)}
					</div>
				</div>
			</div>
		)
	}
}