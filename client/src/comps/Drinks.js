import React from 'react';
import {connect} from 'react-redux';
import {removeDrink} from '../actions/actionCreators';
import {Link} from 'react-router-dom';

class Drinks extends React.Component{


	render(){

		return(
			<div>
				<h2>{this.props.drink.name}</h2> |
				<Link to={`/${this.props.drink._id}`}>See Fill Info</Link> |
				<Link to={`/edit/${this.props.drink._id}`}> Edit Drink </Link> |
				<button onClick={()=>this.props.removeDrink(this.props.drink._id)}>Remove Drink</button>
			</div>
		)


	}



}

const mapStateToProps = state =>({
	state: state.state.state
})

export default connect(mapStateToProps,{removeDrink})(Drinks);