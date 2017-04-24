import React from 'react';


export default class HomeSearch extends React.Component {

	render(){
		return (
			<div className="homeSearch">
				<video className="videoBack" poster="./app/styles/images/palmtrees.png" autoPlay="true" loop>
					<source src="./app/styles/images/palmtrees.mp4" type="video/mp4"/>
				</video>
			</div>
		)
	}
}