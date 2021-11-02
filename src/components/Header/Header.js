import { useContext } from "react";
import { Link } from "react-router-dom";

import FavoritesContext from "../store/favorites-context";


import "./header.css";

function Header() {

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <>
            <div className="container-fixed">
            <div className="pt3 mt-4 header">
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">View all characters</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            See your pick
                            <span className="badge">
                                {favoritesCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </>
    );
}

export default Header;