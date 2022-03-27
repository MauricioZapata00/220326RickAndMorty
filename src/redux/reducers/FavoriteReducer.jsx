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

export const RemoveFavoriteReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ActionTypes.REMOVE_FAVORITES:
            /*
            console.log("Se detecta el nombre: ",action.data.name)
            
            const currArrayOfKeys = Object.keys(action.data)
            const currArrayOfValues = Object.values(action.data)
            //const currArrayOfFavorites = .from(action.data)

            console.log("Array de keys",currArrayOfKeys)
            console.log("Array de values",currArrayOfValues)
            */
            
            let index = state.favorites.findIndex((x) => x.name === action.data.name);
            console.log("El indice es: ", index)
            return{...state, favorites: [...state.favorites.slice(0, index), 
                ...state.favorites.slice(index + 1)]}
    
        default:
            return state;
    }
}