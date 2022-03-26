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
                    <Link to="/personajes">Episodios</Link>
                </li>
                <li>
                    <Link to="/seasones">Temporadas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;