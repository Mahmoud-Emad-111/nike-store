import React from "react";
import './popular_sales.css';
import Item_popular from "./item_popular/item_popular";
const Popular=({data,setbuy})=>{
    return(
        <div className="popular">
            <h1>{data.title}</h1>
                <div className="items">
                    {
                        data.items.map((item,index)=>{
                            return <Item_popular key={index} data={item} setbuy={setbuy}/>
                        })
                    }
                </div>
        </div>
    )
}
export default Popular;