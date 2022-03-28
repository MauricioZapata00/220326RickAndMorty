import {ActionTypes} from '../constants/ActionTypes'
import axios from "axios";

const response = axios.get("https://rickandmortyapi.com/api/episode")
    .catch((err) => {
        console.log("El error es: ", err)
    });
    console.log(response);
const initialState = {
    episodes: [],
    searchedEpisodes: []
}
export const EpisodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_EPISODES:
            return {...state, episodes: action.data};
        
        case ActionTypes.SEARCH_EPISODE:

            if ( !action.data.length >= 1){
                // state.searchedEpisodes = state.episodes;
                return {...state , searchedEpisodes:state.episodes} 
            }
            else {
                state.searchedEpisodes = state.episodes.filter( (episode) =>{
                // primero vamos a normalizar los textos. Ponemos todo en miniscula
                const nameText = episode.name.toLowerCase();
                const searchText = action.data.toLowerCase();
                // retornamos solo los que cumplen con la condicion
                return nameText.includes(searchText)
                } )
            }
            return {...state}

        default:
            return state;
            
    }
}