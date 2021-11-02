import { Fragment, useContext } from "react";

import FavoritesContext from "../components/store/favorites-context";
import CardLayout from "../components/Card/CardLayout";

function Favorites( {characters }) {

    const favoriteCtx = useContext(FavoritesContext);

    if(favoriteCtx.totalFavorites === 0) {
        return <h1 className="text-center mt-3 headline"> You don't have any favorite characters.
        <br/> Start adding some! </h1>
    }

    return (
        <Fragment>
            <h1 className="text-center mt-3 headline"> Your favourite characters! </h1>
            <CardLayout characters={favoriteCtx.favorites} />
        </Fragment>
        
    );
}

export default Favorites;