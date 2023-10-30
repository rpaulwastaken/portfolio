import React from 'react';
import rounak_img from "./images/rounak.png";
import "./avatar.css";

function Avatar() {
    return (
        <div className={"avatar"}>
            <div className={"avatar_bg"} />
            <img className={"avatar_img"} src={rounak_img} alt={"Rounak"}/>
        </div>
    );
}

export default Avatar;