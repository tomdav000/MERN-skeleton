import React from 'react';
import {connect} from 'react-redux';
import {getDrink, updateDrink} from '../actions/actionCreators';

class UpdateDrink extends React.Component{

	state = {
		name: '',
		flavor:''
	}

	componentWillReceiveProps(nextProps, nextState){
		this.setState({
			name: nextProps.state.name,
			flavor: nextProps.state.flavor
		})
	}

	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getDrink(id);
	}

	onNameChange = e => this.setState({name: e.target.value});
	onFlavorChange = e => this.setState({flavor: e.target.value});

	onSubmit = e => {

		e.preventDefault();

		console.log(this.state);

		const {id} = this.props.match.params;
		const updDrink ={
			id,
			name: this.state.name,
			flavor: this.state.flavor
		}

		this.props.updateDrink(updDrink);
	}


	render(){

		return(
			<div>
				<h1>Update Drink Info</h1>
				<form onSubmit={this.onSubmit}>
					<input type='text' name='name' value={this.state.name} onChange={this.onNameChange}/>
					<input type='text' name='flavor' value={this.state.flavor} onChange={this.onFlavorChange}/>
					<input type='submit' name='submit' value='submit'/>
				</form>
			</div>
		)


	}



}

const mapStateToProps = state =>({
	state: state.state.state
})

export default connect(mapStateToProps,{getDrink, updateDrink})(UpdateDrink);