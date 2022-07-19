import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    function amountMan() {
        if (length >= 20) {
            const digitArr = String(length).split("");
            const n = Number(digitArr[digitArr.length - 1]);
            return n === 2 || n === 3 || n === 4 ? "человека" : "человек";
        } else {
            return length === 2 || length === 3 || length === 4
                ? "человека"
                : "человек";
        }
    }
    return (
        <h2 className="badge bg-primary">{`С тобой готовы затусить ${length} ${amountMan(
            length
        )}`}</h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
