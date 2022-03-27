import { combineReducers } from "redux";
import {EpisodeReducer} from "./EpisodeReducer";
import {CharacterReducer} from "./CharacterReducer";

const reducers = combineReducers({
    allEpisodes: EpisodeReducer,
    allCharacters: CharacterReducer,
})

export default reducers