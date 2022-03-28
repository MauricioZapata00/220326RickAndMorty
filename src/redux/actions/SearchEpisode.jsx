import { ActionTypes } from "../constants/ActionTypes";

export const searchEpisode = (text)=>{
    return {
      type: ActionTypes.SEARCH_EPISODE,
      data: text
    }
};

