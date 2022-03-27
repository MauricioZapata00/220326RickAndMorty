import { combineReducers } from "redux";
import {EpisodeReducer} from "./EpisodeReducer";
import {CharacterReducer} from "./CharacterReducer";
import { FavoriteReducer, ListFavoritesReducer } from "./FavoriteReducer";

const reducers = combineReducers({
    allEpisodes: EpisodeReducer,
    allCharacters: CharacterReducer,
    allFavorites: FavoriteReducer,
    currentFavorites: ListFavoritesReducer,
})

export default reducers;