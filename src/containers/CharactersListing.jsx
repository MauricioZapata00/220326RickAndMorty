import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCharacters} from '../redux/actions/CharactersActions'
import CharactersComponent from '../components/CharactersComponent';
import axios from "axios";

const CharactersListing = () => {

    const characters = useSelector((state) => state.allCharacters.characters)
    //console.log(characters)
    const dispatch = useDispatch();

    const fetchAllCharacters = async() => {
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        .catch((err) => {
            console.log("El error es: ", err)
        });
        //console.log(response)
        dispatch(setCharacters(response.data.results))
    }

    useEffect(() => {
        fetchAllCharacters()
    },[])

    
    return(
        <div className="row">
            <CharactersComponent />
        </div>
    )
}

export default CharactersListing;