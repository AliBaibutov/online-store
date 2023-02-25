import React from "react";

const Loader = () => {
    return (
        <div className="my-container justify-content-center d-flex align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
