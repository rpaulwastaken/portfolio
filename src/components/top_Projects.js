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
                    <h1>Segmentation<img className={"Arrow"} src={arrow_img} alt={"Know More"}/> </h1>
                    <p>
                        A segmentation algorithm that takes in an image of skin cancer and outputs the segmented mask of the affected area.
                    </p>
                </div>
            </div>
            <div className={"Tile2"}>
                <div className={"Tile2Text"}>
                    <img className={"Tile2Image"} src={python_img} alt={"Python"}/>
                    <h1>De - Hazer<img className={"Arrow"} src={arrow_img} alt={"Know More"}/></h1>
                    <p>
                        A model producing clear images from hazy images. Specifics of the project are confidential as it is a part of the SIH'23 Nationals.
                    </p>
                </div>
            </div>
            <div className={"Tile3"}>
                <div className={"Tile3Text"}>
                    <img className={"Tile3Image"} src={cpp_img} alt={"C++"}/>
                    <h1>Game of Hex <img className={"Arrow"} src={arrow_img} alt={"Know More"}/></h1>
                    <p>
                        A game of hex vs the computer. The computer uses the Monte Carlo Tree Search algorithm to make its moves.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TopProjects;