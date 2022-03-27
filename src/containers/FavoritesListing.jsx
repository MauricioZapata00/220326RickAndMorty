import React, { useEffect } from "react";
import FavoritesComponent from "../components/FavoritesComponent";

const FavoritesListing = () => {

    const showFavorites = async() => {
        console.log("Trying to show favorites")
    }

    useEffect(() => {
        showFavorites()
    },[])
    return(
        <div className="container">
            <FavoritesComponent />
        </div>
    )
}

export default FavoritesListing;