import React from "react";
import "./skills.css";

function Skills() {
    return (
        <div className="skills">
            <div className="skillsTitle">
                <h1>Skills</h1>
            </div>
            <div className="skillsContent">
                <div className="languages">
                    <h2>Programming Languages</h2>
                    <p>C <span>|</span> C++ <span>|</span> Python <span>|</span> Java</p>
                </div>
                <div className="dsa">
                    <h2>Data Structures and Algorithms</h2>
                    <p>Arrays <span>|</span> Stacks <span>|</span> Queues <span>|</span> Linked Lists <span>|</span> Trees <span>|</span> Graphs</p>
                </div>
                <div className="webDev">
                    <h2>Web Development</h2>
                    <p>HTML5 <span>|</span> CSS3 <span>|</span> JavaScript <span>|</span> ReactJS</p>
                </div>
                <div className="dataScience">
                    <h2>Data Science Tools</h2>
                    <p>Numpy <span>|</span> Pandas <span>|</span> Scikit-Learn <span>|</span> Matplotlib</p>
                </div>
                <div className="machineLearningFrameworks">
                    <h2>Machine Learning Frameworks</h2>
                    <p>TensorFlow <span>|</span> Keras <span>|</span> OpenCV</p>
                </div>
                <div className="computerVision">
                    <h2>Computer Vision</h2>
                    <p>Image Processing <span>|</span> Object Detection <span>|</span> Object Tracking <span>|</span> Image Classification</p>
                </div>
                <div className="tools">
                    <h2>Tools</h2>
                    <p>Git <span>|</span> GitHub <span>|</span> Jupyter Notebook <span>|</span> JetBrains IDEs</p>
                </div>
                <div className="operatingSystems">
                    <h2>Operating Systems</h2>
                    <p>Linux <span>|</span> Windows</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;