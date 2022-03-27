import {ActionTypes} from '../constants/ActionTypes';

export const setCharacters = (characters) => {
    return {
        type:ActionTypes.SET_CHARACTERS,
        data: characters
    };
};

export const selectedCharacters = (character) => {
    return {
        type:ActionTypes.SELECTED_CHARACTER,
        data: character
    };
};