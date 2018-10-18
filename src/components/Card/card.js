import React from "react";
import "./card.css";

const card = props => (
    <div value={props.id} onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
        <div className="row">
            <div className="col">
                <img alt={props.name} src={props.image} className="img-thumbnail"/>
            </div>
        </div>

    </div>
    </div>
)
export default card;