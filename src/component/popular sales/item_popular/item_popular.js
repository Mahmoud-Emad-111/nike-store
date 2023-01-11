import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useCart,CartProvider } from "react-use-cart";
import "./item_popular.css";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Item_popular=({data,setbuy})  =>{
    const { addItem } = useCart();

    return(
        
        <div className={`item_popular ${data.color} item${data.item_id}` }
        style={{boxShadow:data.shadow,
        backgroundImage:data.linear}} >
            <div className="item_detalis">
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <div className="item_price">
                    <div className="price">
                        <h3>${data.price}</h3>
                    </div>
                    <div className="item_rating">
                        <StarIcon/>
                        {
                            data.rating
                        }
                    </div>
                   
                </div>
                <div className="item_buy">
                        <button >
                        <ShoppingBagIcon onClick={() => setbuy(false)+addItem(data)+toast.success(`${data.title} added to cart`)}/>

                        </button>
                        <button onClick={() => setbuy(false)+addItem(data)+toast.success(`${data.title} added to cart`)}>
                            {
                                data.btn
                            }
                        </button>
                    </div>
            </div>
            
                <div className="item_image">
                    <img src={data.img} alt=""/>
                </div>
                <Link to={`/product/${data.id}`}/>
        </div>
        
    )
}
export default Item_popular;