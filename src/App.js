import './App.css';

import { useState } from 'react';

import { CartProvider } from 'react-use-cart';
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Product from './component/Product/product';
import Home from './component/home/home';
import Singin_page from './component/singin_page/singin_page';
import Login_page from './component/login_page/login_page';
import Profile from './component/profile/profile';


function App() {
  

  const check_side_bar=()=>{
    setshopping_bar(!shopping_bar);
  }
  const [buy, setbuy] = useState(false);
  
  window.addEventListener('scroll',function(){
    
    const nav=document.getElementById('app_nav');
    if (nav !== null) {
    nav.classList.toggle('nav_active',  window.scrollY>108);
      
    }
  });
  const [shopping_bar, setshopping_bar] = useState(false);

  return (
    <CartProvider>

    <BrowserRouter>
    <div className={"App"}>
      <Routes>
      <Route path="/"  exact  element={<Home  check_side_bar={check_side_bar} shopping_bar={shopping_bar} buy={buy} setbuy={setbuy}/> }/>        
        <Route path="/product/:id" element={<Product shopping_bar={shopping_bar} check_side_bar={check_side_bar} buy={buy} setbuy={setbuy}/>} />
        <Route path='/login' element={<Login_page />}/>
        <Route path='/singin' element={<Singin_page />}/>
        <Route path='/profile' element={<Profile shopping_bar={shopping_bar} check_side_bar={check_side_bar}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
