import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../redux/actions/FavoritesActions';

const CharactersComponent = () => {

    const characters = useSelector((state) => state.allCharacters.characters)
    const ArrayCharacters = Array.from(characters)
    const dispatch = useDispatch();

    const addFavorite = async(favorite) => {
        dispatch(setFavorites(favorite))
    }
    
    const renderedListOfCharacters = ArrayCharacters.map((character) =>{
        
        return (
            
            <div className="col mb-2" key={character.id}>
                <div className="card" style={{ minWidth: '20px' }}>
                    <img src={character.image} alt={character.name} className="card-img-top"/>
                    <div className="card-body">
                        <h5>Nombre: {character.name}</h5>
                        <p>Especie: {character.species}</p>
                        <p>Ubicación: {character.location.name}</p>
                        <button onClick={() => addFavorite(character)} className="btn btn-primary">Ver info</button>
                    </div>
                </div>
            </div>
        )
    })    

    return(
        <div>
            {renderedListOfCharacters}
        </div>
    )
    
}

export default CharactersComponent;