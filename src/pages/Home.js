import { useEffect, useState } from "react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";

import Header from "../components/Header/Header";
import CharacterService from "../components/services/CharacterService";

function Home() {

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
        <Fragment>
            <Header />
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

            <div className="container">

                <div className="row m-3">

                    {characters.map(character => {
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

                                        <a href="#" className="btn btn-danger w-100"><i className="bi bi-heart"></i> Add to favorites</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

        </Fragment>
    )

}

export default Home;