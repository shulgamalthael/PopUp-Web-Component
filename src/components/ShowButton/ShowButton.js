//react
import React from "react"

const ShowButton = ({ isShow, setIsShow }) => {
    return(
        <div className="showButton" onClick={() => setIsShow(!isShow)}>Show</div>
    )
}

export default ShowButton