import { Fragment, useContext } from "react";

import FavoritesContext from "../components/store/favorites-context";
import CardLayout from "../components/Card/CardLayout";

function Favorites( {characters }) {

    const favoriteCtx = useContext(FavoritesContext);

    let contentToRender;

    if(favoriteCtx.totalFavorites === 0) {
        contentToRender = <h1 className="text-center headline"> You don't have any favorite characters.
        <br/> Start adding some! </h1>
    } else {
        contentToRender = <div>
            
            <CardLayout characters={favoriteCtx.favorites} />
        </div>
    }

    return (
        <Fragment>
            <h1 className="text-center headline"> My favorite characters! </h1>
            {contentToRender}
        </Fragment>
        
    );
}

export default Favorites;