import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    favorites:[]
}

export const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_FAVORITES:
            return {...state, favorites: [...state.favorites, action.data]};
    
        default:
            return state;
    }
}

export const ListFavoritesReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_FAVORITES:
            return{...state,...action.data};
    
        default:
            return state;
    }
}