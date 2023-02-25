import React from "react";
import PropTypes from "prop-types";

const SortButtons = ({ handleSort }) => {
    return (
        <div className="d-flex flex-column flex-sm-row">
            <button
                type="button"
                className={`btn btn-outline-dark mb-2 mb-sm-0 border sort-button btn-sm me-2`}
                onClick={() => handleSort("price", "desc")}
            >
                убыванию цены
                <i className="bi bi-arrow-down-square-fill ms-1"></i>
            </button>
            <button
                type="button"
                className={`btn btn-outline-dark mb-2 mb-sm-0 border sort-button btn-sm`}
                onClick={() => handleSort("price", "asc")}
            >
                возрастанию цены
                <i className="bi bi-arrow-up-square-fill ms-1"></i>
            </button>
        </div>
    );
};

SortButtons.propTypes = {
    handleSort: PropTypes.func
};

export default SortButtons;
