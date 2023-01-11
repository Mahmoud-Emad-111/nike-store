import {  ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import './Nav_bar.css';
import logo from"../../assets/logo.png";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { get_data_user } from "../../backend_data/user";

const NavBar=({bar})=>{
    const login=get_data_user.isLogin;
    const {totalItems}=useCart();
    return(
        
        <div className="Nav_bar" >
            <Link to={'/'}>
            <img src={logo} alt=""/>
            
            </Link>
            <ul className="icon_nav"> 
                <li>
                    <Link to={`${login?'/profile':'/login'}`}>
                        <UserCircleIcon/>
                    
                    </Link>
                </li>
                <li className="bag" count_item={totalItems}>
                <ShoppingBagIcon onClick={bar} className='bag'/>
                </li>
            </ul>
            
        </div>
    )
}
export default NavBar;