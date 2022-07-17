import React from "react";
import ToggleOn from "../assets/ToggleOn";
import ToggleOff from "../assets/ToggleOff";

const BookMark = ({status}) => {
    return status === true ? <ToggleOn/> : <ToggleOff/>
}

export default BookMark;
