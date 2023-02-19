import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({
    itemsCount,
    pageSize,
    onPageChange,
    onIncrementPage,
    onDecrementPage,
    currentPage
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);
    if (pageCount <= 1) return null;
    return (
        <nav className="d-flex justify-content-center mt-3">
            <ul className="mb-0 p-0 d-flex border ">
                <li className="border-end">
                    <button className="btn" onClick={() => onDecrementPage()}>
                        Предыдущая
                    </button>
                </li>
                {pages.map((page) => (
                    <li
                        className={
                            "border-end" +
                            (page === currentPage ? " bg-dark" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className={
                                "btn border border-white border-0 rounded-0" +
                                (page === currentPage ? " btn-dark" : "")
                            }
                            href="#"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li className="">
                    <button
                        className="btn"
                        onClick={() => onIncrementPage(pages.length)}
                    >
                        Следующая
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    onPageChange: PropTypes.func,
    onIncrementPage: PropTypes.func,
    onDecrementPage: PropTypes.func,
    currentPage: PropTypes.number
};

export default Pagination;
