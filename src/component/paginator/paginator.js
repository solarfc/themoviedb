import "./paginator.scss";
import React from "react";
import Pagination from "react-js-pagination";

const Paginator = ({title, page, total_pages, action}) => {

    const handlePageChange = (pageNumber) => {
        action(pageNumber, title);
    }

    return (
        <Pagination prevPageText='prev' nextPageText='next' firstPageText='first' lastPageText='last' activePage={page} pageRangeDisplayed={10} totalItemsCount={total_pages * 10} onChange={handlePageChange.bind(this)} />
    )
};

export default Paginator;