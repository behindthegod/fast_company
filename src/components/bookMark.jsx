import React from "react";
import PropTypes from "prop-types";
// import ToggleOn from "../assets/ToggleOn";
// import ToggleOff from "../assets/ToggleOff";


const BookMark = ({ status, ...rest }) => {
    return (
        <button>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}/>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool
};

// const BookMark = ({ status }) => {
//     return status === true ? <ToggleOn /> : <ToggleOff />;
// };

BookMark.propTypes = {
    status: PropTypes.bool
};
export default BookMark;
