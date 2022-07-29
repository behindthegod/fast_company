import React from "react";
import PropTypes from "prop-types";
import ToggleOn from "../assets/ToggleOn";
import ToggleOff from "../assets/ToggleOff";


const BookMark = ({ status }) => {
    return status === true ? <ToggleOn /> : <ToggleOff />;
};

BookMark.propTypes = {
    status: PropTypes.bool
};
export default BookMark;
