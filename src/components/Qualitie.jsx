import React from "react";

const Qualitie = ({color, name}) => {
    return (
        <>
        <span className={'badge bg-' + color}>
              {name}
        </span>
        </>
    )
}

export default Qualitie;