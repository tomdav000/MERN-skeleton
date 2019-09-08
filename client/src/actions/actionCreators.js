import {GET_DRINKS, GET_DRINK, ADD_DRINK, REMOVE_DRINK, UPDATE_DRINK} from './types';
import axios from 'axios';

export const getDrinks = () => async dispatch=>{
	const res = await axios.get('/api/drinks/');
	dispatch({
		type: GET_DRINKS,
		payload: res.data
	})
}

export const getDrink = (id) => async dispatch=>{
	const res = await axios.get(`/api/drinks/${id}`);
	dispatch({
		type: GET_DRINK,
		payload: res.data
	})
}

export const addDrink = (drink) => async dispatch=>{
	const config = {
		headers: {'Content-Type': 'application/json'}
	};
	const res = await axios.post('/api/drinks/', drink, config);
	dispatch({
		type: ADD_DRINK,
		payload: res.data
	})
}

export const removeDrink = (id) => async dispatch=>{
	try{
		await axios.delete(`/api/drinks/${id}`);
		dispatch({
			type: REMOVE_DRINK,
			payload: id
		})
	} catch(err){
		console.error(err);
		dispatch({
			type: REMOVE_DRINK,
			payload: id
		})
	}
}

export const updateDrink = (drink) => async dispatch=>{
	const config = {
		headers:{'Content-Type':'application/json'}
	};
	const res = await axios.put(`/api/drinks/${drink.id}`, drink, config);
	dispatch({
		type: UPDATE_DRINK,
		payload: res.data
	})
}