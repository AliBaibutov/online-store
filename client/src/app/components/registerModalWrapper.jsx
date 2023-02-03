import React from "react";
import PropTypes from "prop-types";

const RegisterModalWrapper = ({ children }) => {
    return (
        <div
            className="modal fade"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="registerModalLabel"
                        >
                            Регистрация
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
};

RegisterModalWrapper.propTypes = {
    children: PropTypes.node
};

export default RegisterModalWrapper;
