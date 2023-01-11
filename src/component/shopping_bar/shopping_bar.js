import { ChevronDoubleLeftIcon, MinusSmallIcon, PlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import './shopping_bar.css';
import delvery from '../../data/delvery.json';
import Lottie from 'react-lottie';
import { get_data_user } from "../../backend_data/user";
import   {useNavigate}  from "react-router-dom";
import http from "../axios/http";

const Shopping_bar=({active,check_bar,buy,setbuy})=>{
    const navigate = useNavigate();

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: delvery,
        data:delvery,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const {
        
        totalUniqueItems,
        items,
        cartTotal,
        totalItems,
        updateItemQuantity,
        removeItem,
        
      } = useCart();
      
      const remove_all_item=()=>{
        items.map((item)=>{
            
            removeItem(item.id);
        });
        
      };
      const handel_check_out=async()=>{
        
        if(get_data_user.isLogin){
            remove_all_item();
            setbuy(true);
        }else{
            navigate("/singin")
        }
        
    }

      return(
        <div className={`shopping_bar ${active?'active':''}`}>
            <div className="head">
                <div className='left'>
                <ChevronDoubleLeftIcon onClick={check_bar}/>
                    <h3>Your cart</h3>
                    <div className="items">
                        ({totalUniqueItems} item)
                    </div>
                </div>
                <div className="right">
                    <XMarkIcon onClick={()=>remove_all_item()} />
                </div>
                
            </div>
            <div className="main">
                
                
                {
                buy==false?    items.map((item,index)=>{
                        
                        return(
                            <div className="item" key={index}>
                                <div className="left">
                                    <div className="image" price={item.price } style={{backgroundColor:item.color,boxShadow:item.shadow}}>
                                    <img src={item.img} alt=""/>
                                        
                                    </div>
                                    <div className="item_data">
                                        <div className="name">
                                        <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="item_count">
                        
                                            <button type="button" onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}><MinusSmallIcon/></button>
                                            <h3>{item.quantity}</h3>
                                            <button type="button" onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}><PlusIcon/></button>
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="right">
                                    <h3>${item.price *item.quantity}</h3>
                                    <TrashIcon onClick={()=>removeItem(item.id)}/>
                                </div>
                            </div>
                            

                            
                        )
                        
                    }
                    )
                    :<Lottie height={400} width={400} options={defaultOptions}/>
                }
            </div>

            {
                totalItems==0?'':
                <div className="bottom"> 
                    <div className="total_price">
                        <h3>SUBTOTAL</h3>
                        <h1>${cartTotal}</h1>
                    </div>
                    <div className="checkout">
                        <p>Taxes and Shipping Will Calculate At Shipping</p>
                        <button type="button" onClick={()=>handel_check_out()}>
                            check out
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Shopping_bar;

// remove_all_item()+setbuy(true)
//  navigate("/singin")

