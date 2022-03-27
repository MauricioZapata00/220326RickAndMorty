import React from "react";
import { useSelector } from "react-redux";

const EpisodesComponent = () => {
    //const episodes = useSelector((state) => state.allEpisodes.episodes[0]);
    const episodes = useSelector((state) => state.allEpisodes.episodes);
    //console.log(episodes);
    const ArrayEpisodes = Array.from(episodes)
    const renderedListOfEpisodes = ArrayEpisodes.map((episode) =>{
        return (
            /*
            <div key={episode.id}>
                <h1>Nombre: {episode.name}</h1>
                <h2>Fecha de lanzamiento: {episode.air_date}</h2>
                <h2>Episodio número: {episode.episode}</h2>
                <img src={episode.url} alt={episode.name}></img>
                <h3>Imagen: {episode.url}</h3>
            </div>
            */
            <div className="container" key={episode.id}>
                <div className="card" style={{ minWidth: '200px' }} >
                    <a href={episode.url} className="card-link">Episodio</a>
                    <div className="card-body">
                        <h5 className="card-title">Episodio {episode.episode} - {episode.name}</h5>
                        <p className="card-text">Fecha de lanzamiento: {episode.air_date}</p>
                        <a href="#" className="btn btn-primary">Ver info</a>
                    </div>
                </div>
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