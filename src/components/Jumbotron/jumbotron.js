import React from "react";
import "./jumbotron.css"

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">
                Click on Image to earn points, but don't click on any more than once!
            </p>
        </div>
    </div>
)
export default Jumbotron;