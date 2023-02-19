import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};

Wrapper.propTypes = {
    children: PropTypes.node
};

export default Wrapper;
