import { ActionTypes } from "../constants/ActionTypes";

export const setFavorites = (favorites) => {
    return {
        type: ActionTypes.SET_FAVORITES,
        data: favorites
    };
};