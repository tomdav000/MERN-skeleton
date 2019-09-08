import React from 'react';
import Drinks from './Drinks';
import {connect} from 'react-redux';
import {getDrinks, removeDrink} from '../actions/actionCreators';
import {Link} from 'react-router-dom';

class Home extends React.Component{

	componentDidMount(){
		this.props.getDrinks();
	}

	render(){

		return(
			<div>
				<h1>List of Sports Drinks</h1>
				{this.props.state.map(drink=>
					<Drinks key={drink.id} drink={drink}/>
				)}
				<Link to='/add'>Add New Sports Drink</Link>
			</div>
		)


	}



}

const mapStateToProps = state =>({
	state: state.state.state
})

export default connect(mapStateToProps,{getDrinks, removeDrink})(Home);