import React from "react";

import './sneakers.css';
const Sneaker=({data})=>{
    return(
        <div className="sneakers">
            <div className="right">
                <h3>{data.heading}</h3>
                <h2>{data.title}</h2>
                {/* <h2>{data.text}</h2> */}
                <p>{data.text}</p>
                
                <a href={data.url} target="_blank ">{data.btn}</a>
            </div>
            <div className="left">
                <img src={data.img} alt=""/>
            </div>


        </div>
    )
}
export default Sneaker;
