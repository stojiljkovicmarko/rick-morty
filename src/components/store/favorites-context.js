import { createContext, useState } from "react";

//it returns an object with component and we can store it in a component
//we initialize it with an object as argument
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (character) => {},
    removeFavorites: (characterId) => {},
    isFavorite: (characterId) => {}
});

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(character) {
        setUserFavorites(prevFavs => {
            return prevFavs.concat(character);
        });
    }

    function removeFavoritesHandler(characterId) {
        setUserFavorites(prevFavs => {
            return prevFavs.filter(character => character.id !== characterId);
        });
    }

    function isFavoriteHandler(characterId) {
        return userFavorites.some(character => character.id === characterId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        isFavorite: isFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;