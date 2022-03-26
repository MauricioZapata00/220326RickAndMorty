import React from "react";
import { useSelector } from "react-redux";

const EpisodesComponent = () => {
    //const episodes = useSelector((state) => state.allEpisodes.episodes[0]);
    const episodes = useSelector((state) => state.allEpisodes.episodes);
    //console.log(episodes);
    const ArrayEpisodes = Array.from(episodes)
    const renderedListOfEpisodes = ArrayEpisodes.map((episode) =>{
        return (
            <div key={episode.id}>
                <h1>Nombre: {episode.name}</h1>
                <h2>Fecha de lanzamiento: {episode.air_date}</h2>
                <h2>Episodio número: {episode.episode}</h2>
                <img src={episode.url} alt={episode.name}></img>
                <h3>Imagen: {episode.url}</h3>
            </div>
        )
    })
    const {name, air_date, episode, url} = episodes;
    return(
        <div>
            {renderedListOfEpisodes}
        </div>
    )
}

export default EpisodesComponent;