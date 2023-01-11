import React from "react";
import './higlight.css';
function Higlight(props){
    
    return(
        <div className="higlight">
            <div className="left">
                <img src={props.data.img} alt=""/>
            </div>
            <div className="right">
                <h3>{props.data.heading}</h3>
                <h2>{props.data.title}</h2>
                <p>{props.data.text}</p>
                <a href={props.data.url} target="_blank ">{props.data.btn}</a>
            </div>
        </div>
    )
}
export default Higlight;