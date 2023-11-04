import React from "react";
import SocialIcons from "./social_icons";
import "./intro_text.css";

function IText() {
    return (
        <div className="itext">
            <h1>Hello, I'm <span className="name">Rounak</span>.</h1>
            <h2>
                I'm a passionate problem solver with diverse project experience in the fields of Machine Learning, Computer Vision and Web Development, along with a strong programming foundation. I enjoy solving problems in LeetCode and Codeforces.
            </h2>
            <SocialIcons />
        </div>
    );
}

export default IText;