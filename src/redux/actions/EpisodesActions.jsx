import {ActionTypes} from '../constants/ActionTypes'
export const setEpisodes = (episodes) => {
    return {
        type:ActionTypes.SET_EPISODES,
        data: episodes
    };
};

export const selectedEpisodes = (episode) => {
    return {
        type:ActionTypes.SELECTED_EPISODE,
        data: episode
    };
};