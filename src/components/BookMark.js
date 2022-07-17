import React from "react";
import ToggleOn from "../assets/toggleOn";
import ToggleOff from "../assets/toggleOff";

const BookMark = ({status}) => {
    return status === true ? <ToggleOn/> : <ToggleOff/>
}

export default BookMark;
