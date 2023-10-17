import React from "react";
import SocialIcons from "./social_icons";
import "./intro_text.css";

function IText() {
    return (
        <div className="itext">
            <h1>Hello, I'm <span className="name">Rounak</span>.</h1>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, quam sapien
                tincidunt nunc, eget aliquam nisl nunc quis nunc. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
            </h2>
            <SocialIcons />
        </div>
    );
}

export default IText;