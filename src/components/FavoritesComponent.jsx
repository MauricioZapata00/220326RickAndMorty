import React from "react";
import { useSelector } from "react-redux";

const FavoritesComponent = () => {
    
    console.log("Llego a FavoritesComponent")
    const favorites = useSelector((state) => state.allFavorites.favorites)
    console.log(favorites)
    const ArrayFavorites = Array.from(favorites)
    console.log(ArrayFavorites)

    
    const renderedListOfFavorites = ArrayFavorites.map((favorite) => {
        console.log(favorite)
        return(
            
            <div className="col-md-4 mb-2" key={favorite.id}>
                <div className="card" style={{ minWidth: '20px' }}>
                    <img src={favorite.image} alt={favorite.name} className="card-img-top"/>
                    <div className="card-body">
                        <h5>Nombre: {favorite.name}</h5>
                        <p>Especie: {favorite.species}</p>
                        <p>Ubicación: {favorite.location.name}</p>
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