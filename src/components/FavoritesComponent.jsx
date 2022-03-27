import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "../redux/actions/FavoritesActions";
import { setFavorites } from '../redux/actions/FavoritesActions';

const FavoritesComponent = () => {
    
    //console.log("Llego a FavoritesComponent")
    const favorites = useSelector((state) => state.allFavorites.favorites)
    //console.log(favorites)
    const ArrayFavorites = Array.from(favorites)
    //console.log(ArrayFavorites)
    const dispatch = useDispatch();

    const eraseFavorite = async(favorite) => {
        //console.log("Entró al dispatch de quitar favoritos")
        dispatch(removeFavorites(favorite))
        /*
        const index = favorites.findIndex(object => {
            return object === favorite;
        })
        console.log("Indice detectado: ", index)
        favorites.splice(index,index)
        const myFunction = favorites.map((favoriteIterable) =>{
            dispatch(setFavorites(favoriteIterable))
        })
        
        myFunction()
        */
        
    }

    
    const renderedListOfFavorites = ArrayFavorites.map((favorite) => {
        //console.log(favorite)
        return(
            
            <div className="col-md-4 mb-2" key={favorite.id}>
                <div className="card" style={{ minWidth: '20px' }}>
                    <img src={favorite.image} alt={favorite.name} className="card-img-top"/>
                    <div className="card-body">
                        <h5>Nombre: {favorite.name}</h5>
                        <p>Especie: {favorite.species}</p>
                        <p>Ubicación: {favorite.location.name}</p>
                        <button onClick={() => eraseFavorite(favorite)} className="btn btn-primary">Quitar de Favoritos</button>
                    </div>
                </div>
            </div>
            
            
        )
    })

    return(
        <div className="row">
            {renderedListOfFavorites}
        </div>
    )
}

export default FavoritesComponent;