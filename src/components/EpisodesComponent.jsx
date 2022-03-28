import React from "react";
import { useSelector } from "react-redux";
import SearcherOfEpisodes from "../components/SearcherOfEpisodes";
import { searchEpisode } from "../redux/actions/SearchEpisode";

const EpisodesComponent = () => {
    //const episodes = useSelector((state) => state.allEpisodes.episodes[0]);
    const episodes = useSelector((state) => state.allEpisodes.episodes);
    const searchedEpisodes = useSelector((state) => state.allEpisodes.searchedEpisodes)
    //console.log(episodes);
    const ArrayEpisodes = Array.from(episodes)
    const RenderedListOfEpisodes = () =>{
        return (
                <>
                    {
                        searchedEpisodes.length === 0 ? (
                            ArrayEpisodes.map((episode) => {
                                return(
                                    <div className="col-md-4 mb-2" key={episode.id}>
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
                            
                        ):(
                            searchedEpisodes.map((episode1) =>{
                                return(
                                    <div className="card" style={{ minWidth: '200px' }} >
                                        <a href={episode1.url} className="card-link">Episodio</a>
                                        <div className="card-body">
                                            <h5 className="card-title">Episodio {episode1.episode} - {episode1.name}</h5>
                                            <p className="card-text">Fecha de lanzamiento: {episode1.air_date}</p>
                                            <a href="#" className="btn btn-primary">Ver info</a>
                                        </div>
                                    </div>
                                )
                            })
                            
                            
                        )
                    }
                </>
               
           
            
            
        )
    }
    const {name, air_date, episode, url} = episodes;
    return(
        <div className="row">
            <h5>Episodios</h5>
            <SearcherOfEpisodes />
            <RenderedListOfEpisodes />
        </div>
    )
}

export default EpisodesComponent;