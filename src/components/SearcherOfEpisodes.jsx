import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchEpisode } from "../redux/actions/SearchEpisode";

const SearcherOfEpisodes = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (event)=>{
        console.log(event.target.value)
        dispatch(searchEpisode(event.target.value))
        setSearchValue(event.target.value)
    }
    return ( 
        <div>
          <input 
            value= {searchValue}
            className='searchBox' type = 'text' placeholder='Busqueda Episodio' 
            onChange ={onSearchValueChange}
          />
        </div>
    );
}

export default SearcherOfEpisodes;