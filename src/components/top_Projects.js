import React from "react";
import "./top_Projects.css";
import python_img from "./images/python.png";
import python_red_img from "./images/python_red.png";
import cpp_img from "./images/cpp.png";
import arrow_img from "./images/arrow.png";

function TopProjects() {
    return (
        <div className={"topProjects"}>
            <div className={"Tile1"}>
                <div className={"Tile1Text"}>
                    <img className={"Tile1Image"} src={python_red_img} alt={"Python"}/>
                    <h1>Project 1 <img className={"Arrow"} src={arrow_img} alt={"Know More"}/> </h1>
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                    </p>
                </div>
            </div>
            <div className={"Tile2"}>
                <div className={"Tile2Text"}>
                    <img className={"Tile2Image"} src={python_img} alt={"Python"}/>
                    <h1>Project 2 <img className={"Arrow"} src={arrow_img} alt={"Know More"}/></h1>
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                    </p>
                </div>
            </div>
            <div className={"Tile3"}>
                <div className={"Tile3Text"}>
                    <img className={"Tile3Image"} src={cpp_img} alt={"C++"}/>
                    <h1>Project 3 <img className={"Arrow"} src={arrow_img} alt={"Know More"}/></h1>
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TopProjects;