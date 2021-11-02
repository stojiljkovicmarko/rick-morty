
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import CharacterService from "./components/services/CharacterService";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css';
import Header from "./components/Header/Header";

function App() {


  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const loadCharacters = () => {

    CharacterService.getCharacters().then(info => {
      setPageCount(info.pageCount);
      setCharacters(info.results);
    });

  }

  const handlePageChange = (data) => {

    let currentPage = data.selected + 1;

    CharacterService.getCharactersByPage(currentPage).then(characters => {
      setCharacters(characters);
    });
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div>
      <Header />
      <Route path="/" exact>
        <Home
          characters={characters}
          pageCount={pageCount}
          handlePageChange={handlePageChange} />
      </Route>
      <Route path="/home" exact>
        <Home
          characters={characters}
          pageCount={pageCount}
          handlePageChange={handlePageChange} />
      </Route>
      <Route path="/favorites" exact>
        <Favorites characters={characters} />
      </Route>
    </div>
  );
}

export default App;
