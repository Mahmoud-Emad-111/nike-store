import React from "react";
import Item_foater from "../item_foater/item_foater";
import './foater.css';
const Foater=({data})=>{
    return(
        <div className="foater">
            <div className="items">
                {
                    data.links.map((data,index)=>{
                        return <Item_foater data={data} key={index}/>
                    })
                }
            </div>
            <h2>Mahmoud Emad</h2>
        </div>
    )
}
export default Foater;