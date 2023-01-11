import React from "react";
import './item_foater.css';
const Item_foater=({data})=>{
    return(
        <div className="item_foater">
            <h3>
                {data.title}
                
            </h3>
            <a href="">{data.link}</a>
            <a href="">{data.one}</a>
            <a href="">{data.two}</a>
            <a href="">{data.three}</a>
            <a href="">{data.four}</a>
            <a href="">{data.five}</a>
            
        </div>
    )
}
export default Item_foater;