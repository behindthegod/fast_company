import React from "react";
import ToggleOn from "../assets/ToggleOn";
import ToggleOff from "../assets/ToggleOff";
import PropTypes from "prop-types";

const BookMark = ({ status }) => {
    return status === true ? <ToggleOn /> : <ToggleOff />;
};

BookMark.propTypes = {
    status: PropTypes.bool
};
export default BookMark;
