import React from "react";
import Item_sales from "./item_sales/item_sales";
import "./sales.css";

const Sales=({data,setbuy})=>{
    return(
        <div className="sales">
            <h1>{data.title}</h1>
            <div className="items">
                {
                    data.items.map((data,index)=>{
                        return(
                            <Item_sales key={index} data={data} setbuy={setbuy}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Sales;