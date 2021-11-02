import { Fragment } from "react";
import ReactPaginate from "react-paginate";

import CardLayout from "../components/Card/CardLayout";

function Home({ characters, pageCount, handlePageChange }) {


    return (
        <Fragment>
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
            <CardLayout characters={characters} />
        </Fragment>
    )

}

export default Home;