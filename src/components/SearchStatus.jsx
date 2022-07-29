import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
    };

    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;


// const SearchStatus = ({ length }) => {
//     function amountMan() {
//         if (length >= 20) {
//             const digitArr = String(length).split("");
//             const n = Number(digitArr[digitArr.length - 1]);
//             return n === 2 || n === 3 || n === 4 ? "человека" : "человек";
//         } else {
//             return length === 2 || length === 3 || length === 4
//                 ? "человека" : "человек";
//         }
//
//     }
//     return (
//         <h2 className="badge bg-primary">{`С тобой готовы затусить ${length} ${amountMan(length)}`}</h2>
//     );
// };

