import React from 'react';
import {connect} from 'react-redux';
import {getDrink} from '../actions/actionCreators';
import {Link} from 'react-router-dom';

class Drink extends React.Component{

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.getDrink(id);
	}

	render(){

		return(
			<div>
				<h1>{this.props.state.name} is {this.props.state.flavor}</h1> | <br/>
				<Link to={`/edit/${this.props.state._id}`}>Edit Drink </Link>
			</div>
		)


	}



}

const mapStateToProps = state =>({
	state: state.state.state
})


export default connect(mapStateToProps,{getDrink})(Drink);