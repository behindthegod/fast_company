import React from "react";
import ToggleOn from "../assets/toggleOn";
import ToggleOff from "../assets/toggleOff";

const BookMark = ({bookmark}) => {
    return bookmark === true ? <ToggleOn/> : <ToggleOff/>
}

export default BookMark;