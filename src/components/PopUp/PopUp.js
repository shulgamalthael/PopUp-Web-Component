//react
import React from "react"

const PopUp = ({ isShow, setIsShow }) => {
    return(
        <div className="wl-fb-popup2">
            <div className="wl-fb-popup2-close" onClick={() => setIsShow(!isShow)}>+</div>
            <div>It`s WL Fitbuilder`s PopUp</div>
        </div>
    )
}

export default PopUp