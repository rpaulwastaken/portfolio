import React from "react";
import "./intro_box.css";
import TopProjects from "./top_Projects";

function IBox() {
    return (
        <>
            <div className={"filler"} />
            <div className="ibox">
                <TopProjects />
            </div>
        </>
    );
}

export default IBox;