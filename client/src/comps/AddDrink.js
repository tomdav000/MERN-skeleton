import React from 'react';
import {connect} from 'react-redux';
import {addDrink} from '../actions/actionCreators';


class AddDrink extends React.Component{

	state ={
		name: '',
		flavor: ''
	}

	onNameChange = e => this.setState({name: e.target.value});
	onFlavorChange = e => this.setState({flavor: e.target.value});

	onSubmit = e => {
		e.preventDefault();

		console.log(this.state);

		const newDrink = {
			name: this.state.name,
			flavor: this.state.flavor
		}

		this.props.addDrink(newDrink);
	}

	render(){

		return(
			<div>
				<h1>Add Drink and Flavor</h1>
				<form onSubmit={this.onSubmit}>
					<input type='text' name='name' value={this.state.name} onChange={this.onNameChange}/>
					<input type='text' name='flavor' value={this.state.flavor} onChange={this.onFlavorChange}/>
					<input type='submit' name='submit' value='submit'/>
				</form>
			</div>
		)


	}



}


export default connect(null,{addDrink})(AddDrink);