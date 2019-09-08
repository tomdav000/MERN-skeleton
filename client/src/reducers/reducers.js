import {GET_DRINKS, GET_DRINK, ADD_DRINK, REMOVE_DRINK, UPDATE_DRINK} from '../actions/types';

const initialState = {
	state: []
}

export default function(state=initialState, action){
	switch(action.type){
		case GET_DRINKS:
			return{
				...state,
				state: action.payload
			}
		case GET_DRINK:
			return{
				...state,
				state: action.payload
			}
		case ADD_DRINK:
			return{
				...state,
				state: [...state.state, action.payload]
			}
		case REMOVE_DRINK:
			return{
				...state,
				state: state.state.filter(state=>
					state.id !== action.payload)
			}
		case UPDATE_DRINK:
			return{
				...state,
				state: state.state.map(state=>
					state.id === action.payload.id ? (state = action.payload) : state)
			}
		default:
			return{
				...state
			}
	}
}