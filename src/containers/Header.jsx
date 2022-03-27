import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/episodes">Episodios</Link>
                </li>
                <li>
                    <Link to="/characters">Personajes</Link>
                </li>
                <li>
                    <Link to="/favorites">Favoritos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;