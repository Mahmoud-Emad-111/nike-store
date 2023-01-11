import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React  from "react";
import { useCart } from "react-use-cart";
import './item_sales.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Item_sales=({data,setbuy})=>{
    const { addItem } = useCart();

    return(
        <div className="item_sales" style={{boxShadow:data.shadow,backgroundColor:data.color}}>
            <h2>{data.title}</h2>
            <h3>{data.text}</h3>
            <div className="price">
                
                <div className="salery">
                {data.price}
                </div>
                <div className="rating">
                    <StarIcon/>
                    <p>{data.rating}</p>
                </div>
            </div>
            <div className="buy">
                    <button className="icon">
                    <ShoppingBagIcon onClick={() => setbuy(false)+addItem(data)+toast.success(`${data.title} added to cart`)}/>

                    </button>
                    <button onClick={() => setbuy(false)+addItem(data)+toast.success(`${data.title} added to cart`)}>Buy Now</button>
            </div>
            <img src={data.img} alt=""/>
            <Link to={`/product/${data.id}`}/>

        </div>
    )
}
export default Item_sales;