import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Body extends React.Component {



	render(){
		return(
			<div className="bodyContainer">
				<div className='availProp'>
					<h1>Available Properties</h1>
					<p> 200 listings in Your Location </p>
					<div className="properties">
						<div className="property property1">
							<div className='propDetails'>
								<div ><div className="redDot" /> For Sale </div>
								<div className="priceDesc">
									<h3 className="price">$440K </h3>
									<p className='propFeat'>4bds. 2ba. 2,500sqft</p>
								</div>
								<p className="propDescrip"> 0 days on Zillow. 123 S Fake St. Anytown, USA </p>
							</div>
						</div>
						<div className="property property2">
							<div className='propDetails'>
								<div ><div className="redDot" /> For Sale </div>
								<div className="priceDesc">
									<h3 className="price">$350K </h3>
									<p className='propFeat'>4bds. 3ba. 2,200sqft</p>
								</div>
								<p className="propDescrip"> 0 days on Zillow. 321 N Simpson Blvd. Springfield, USA </p>
							</div>
						</div>
						<div className="property property3">
							<div className='propDetails'>
								<div ><div className="redDot" /> For Sale </div>
								<div className="priceDesc">
									<h3 className="price">$513K </h3>
									<p className='propFeat'>3bds. 4ba. 3,250sqft</p>
								</div>
								<p className="propDescrip"> 0 days on Zillow. 53252 Doesn't Exist Rd fakeCity, USA </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}