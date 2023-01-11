import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { popularsales } from "../../data/data";
import { toprateslaes,story, footerAPI} from "../../data/data";
import NavBar from "../Nav_bar/Nav_bar";
import TopStories from "../top_stories/stories";
import Foater from '../foater/foater';
import './product.css';
import Sales from "../sales/sales";
import Shopping_bar from "../shopping_bar/shopping_bar";
const Product=({check_side_bar,shopping_bar,buy,setbuy})=>{
    
    const { addItem } = useCart();

    const {id} =useParams();
    const item=popularsales.items.find((item)=>item.id===id) ?popularsales.items.find((item)=>item.id===id): toprateslaes.items.find((item)=>item.id===id);  ;

    return(
        <>
            <Shopping_bar check_bar={check_side_bar} active={shopping_bar} buy={buy} setbuy={setbuy}/>
        <div className="product">
            <div className="app_nav nav" style={{boxShadow:item.shadow,backgroundColor:item.color}}>
                <div className="container ">
                    <NavBar bar={check_side_bar}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="main">
                        <div className="left" style={{boxShadow:item.shadow,backgroundColor:item.color}}>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="right">
                            <h1 style={{color:item.color}}>{item.title}</h1>
                            <h2>${item.price}</h2>
                            <button onClick={()=>addItem(item)} style={{boxShadow:item.shadow,backgroundColor:item.color}} type="button">ADD TO CART</button>
                            <div className="bottom">
                                <h2>Product Detalis:</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                </div>
                <br/>
                <Sales data={toprateslaes}/>
                <br/>
                <TopStories data={story}/>
            </div>
            <Foater data={footerAPI}/>
        </div>
        </>
    )
}
export default Product;





