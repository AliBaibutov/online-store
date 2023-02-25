import React from "react";
import PropTypes from "prop-types";

const SideBar = ({
    categories,
    filterSubcategories,
    filterProducts,
    renderAllProducts
}) => {
    return (
        <div className="d-flex flex-column align-items-center align-items-lg-start pt-2 ps-2 me-1 mb-2 mb-lg-0 col-12 col-lg-3 card cursor shadow p-3 bg-body-tertiary rounded">
            <h4>КАТЕГОРИИ</h4>
            {categories.map((c) => (
                <div key={c._id} className="mb-2 cursor dropdown">
                    <div className="category-hover" data-bs-toggle="dropdown">
                        {c.name}
                    </div>
                    <div className="dropdown-menu">
                        {filterSubcategories(c.name).map((s) => (
                            <div
                                className="dropdown-item text-wrap category-hover bg-transparent"
                                onClick={() => filterProducts(s._id)}
                                key={s._id}
                            >
                                {s.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div
                className="category-hover bg-transparent cursor text-wrap"
                onClick={renderAllProducts}
            >
                Все товары
            </div>
        </div>
    );
};

SideBar.propTypes = {
    categories: PropTypes.array,
    filterSubcategories: PropTypes.func,
    filterProducts: PropTypes.func,
    renderAllProducts: PropTypes.func
};

export default SideBar;
