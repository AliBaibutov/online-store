import React from "react";
import PropTypes from "prop-types";

const SearchQueryForm = ({ searchQuery, handleSearchQuery }) => {
    return (
        <form className="input-group mb-2">
            <input
                className="w-100 mx-auto form-control rounded"
                name="searchQuery"
                placeholder="Введите наименование товара..."
                type="text"
                aria-describedby="basic-addon1"
                value={searchQuery}
                onChange={handleSearchQuery}
            />
        </form>
    );
};

SearchQueryForm.propTypes = {
    searchQuery: PropTypes.string,
    handleSearchQuery: PropTypes.func
};

export default SearchQueryForm;
