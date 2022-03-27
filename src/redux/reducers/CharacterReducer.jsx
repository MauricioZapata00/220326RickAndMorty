import {ActionTypes} from '../constants/ActionTypes';
import axios  from "axios";

const response = axios.get("https://rickandmortyapi.com/api/episode")
    .catch((err) => {
        console.log("El error es: ", err)
    });
    console.log(response);

const initialState = {
    //characters:response.data.results
    characters: []
}

export const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CHARACTERS:
            return {...state, characters: action.data};
    
        default:
            return state;
    }
}