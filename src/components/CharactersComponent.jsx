import React from 'react';
import { useSelector } from 'react-redux';

const CharactersComponent = () => {

    const characters = useSelector((state) => state.allCharacters.characters)
    const ArrayCharacters = Array.from(characters)

    const renderedListOfCharacters = ArrayCharacters.map((character) =>{

        return (
            <div className="container-sm" key={character.id}>
                <div className="card" style={{ width: '18rem' }} >
                    <img src={character.image} class="card-img-top" alt={character.name} />
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {character.name}</h5>
                        <p className="card-text">Specie: {character.species}</p>
                        <a href="#" className="btn btn-primary">Ver info</a>
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