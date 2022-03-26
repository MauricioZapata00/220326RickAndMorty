import { combineReducers } from "redux";
import {EpisodeReducer} from "./EpisodeReducer";

const reducers = combineReducers({
    allEpisodes: EpisodeReducer,
})

export default reducers