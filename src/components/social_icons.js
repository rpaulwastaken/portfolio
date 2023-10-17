import React from "react";
import github_img from "./images/github.png";
import linkedin_img from "./images/linkedin.png";
import leetcode_img from "./images/leetcode.png";
import "./social_icons.css";

function SocialIcons() {
    return (
        <div className="social_icons">
            <a href="https://www.linkedin.com/in/rounakpaul" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_img} alt="linkedin"/>
            </a>
            <a href="https://github.com/rpaulwastaken" target="_blank" rel="noopener noreferrer">
                <img src={github_img} alt="github"/>
            </a>
            <a href="https://leetcode.com/duckyfied/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode_img} alt="leetcode"/>
            </a>
        </div>
    );
}

export default SocialIcons;