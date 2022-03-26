import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setEpisodes} from "../redux/actions/EpisodesActions"
import EpisodesComponent from "../components/EpisodesComponent";

const EpisodesListing = () => {
    // Create
    //const episodes = useSelector((state) => state)
    //console.log(episodes);
    const episodes = useSelector((state) => state.allEpisodes.episodes)
    const dispatch = useDispatch();

    const fetchAllEpisodes = async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/episode")
        .catch((err) => {
            console.log("El error es: ", err)
        });
        dispatch(setEpisodes(response.data.results));
    }
    console.log("Episodios del Listing: ", episodes);

    useEffect(() =>{
        fetchAllEpisodes();
    }, [])
    //const {name, air_date, episode, url} = episodes;
    return (
        <div>
            <EpisodesComponent />
        </div>
    )
}

export default EpisodesListing;