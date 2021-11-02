import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";

import "./Card.css";

function Card({ character }) {

    const favoritesCtx = useContext(FavoritesContext);

    const isItemFavorite = favoritesCtx.isFavorite(character.id);

    function toggleFavoriteStatus() {
        if(isItemFavorite) {
            favoritesCtx.removeFavorites(character.id);
        } else {
            favoritesCtx.addFavorites(character);
        }
    }

    console.log(favoritesCtx.favorites);

    return (
        <div key={character.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-2 p-1">
            <div className="card">
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="mb-2">
                        <h5 className="card-title text-center mb-3 fw-bold">{character.name}</h5>
                        <p className="card-text">Species: <span className="fw-bold">{character.species}</span></p>
                        <p className="card-text">Origin: <span className="fw-bold">{character.origin.name}</span></p>
                        <p className="card-text">Status: <span className="fw-bold">{character.status}</span></p>
                    </div>

                    <button onClick={toggleFavoriteStatus} 
                    className={isItemFavorite ? "btn btn-danger" : "btn btn-outline-danger fw-bold"}>
                        <i className="bi bi-heart"></i> {isItemFavorite ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;