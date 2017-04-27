import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import BuyPage from './components/BuyPage';
import RentPage from './components/RentPage';
import Body from './components/Body';




const routes = (
	<Router >
	<div>
		<Nav />
		<Route path="/" component={Home}/>
		<Route path="/buy" component={BuyPage} />
		<Route path="/rent" component={RentPage} />
		<Body />
	</div>
	</Router>

)

export default routes;
