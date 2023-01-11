import React, { useEffect, useState } from "react";
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from "../../data/data";
import Foater from "../foater/foater";
import Hero from "../Hero";
import Higlight from "../hilight/higlight";
import NavBar from "../Nav_bar/Nav_bar";
import Popular from "../popular sales/popular_sales";
import Sales from "../sales/sales";
import Shopping_bar from "../shopping_bar/shopping_bar";
import Sneaker from "../sneakers/sneakers";
import TopStories from "../top_stories/stories";
import Modal from '@mui/material/Modal';
import './home.css';
import { XMarkIcon } from "@heroicons/react/24/solid";
const Home=({shopping_bar,check_side_bar,buy,setbuy})=>{  
  const [open, setopen] = useState(localStorage.getItem('model')=='false' ?false :true);
    window.addEventListener('scroll',function(){
        const nav=document.querySelector('.app_nav');
        if (nav !== null) {
          
          nav.classList.toggle('nav_active',  window.scrollY>108);
        }
    });

    return(
        <>
      <Modal 
      open={open}
    
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <div className="home_style" >
          <XMarkIcon onClick={()=>localStorage.setItem('backend',false) +setopen(false)+localStorage.setItem('model',false)}/>
          <div className="model_left">
            <div className="content_model_left">
            <h1>Warning</h1>
            <h2>You are definitely a developer to watch this site to know my experiences</h2>
            <h3>This site is a demo site</h3>
            <p>There is no free hosting to deploy the backend code, but if you want to try the site with the backend
            You can download the backend code, run it, and try the site with the backend.</p>
            </div>
            <div>
              <ul>
                <li>
                  Download backend code
                </li>
                <li>
                Connecting database
                </li>
                <li>
                  run code backend
                </li>
                <li>
                  get start
                </li>
                
              </ul>
              <div className="bottom_model">
                
              <button type="button" onClick={()=>localStorage.setItem('backend',true) +setopen(false)+localStorage.setItem('model',false)}>get start</button>
                <a href="https://github.com/Mahmoud-Emad-111/Backend_nike_stor_profile/archive/refs/heads/main.zip">Dawnload code backend</a>
              </div>
            </div>
          </div>
          <div className="model_right">
            <div className="content_model_rigth">
              <h1>You can try out the site without using a backend</h1>
            </div>
            <button type="button" onClick={()=>localStorage.setItem('backend',false) +setopen(false)+localStorage.setItem('model',false)}>get start</button>
          </div>
        </div>
      </Modal>
        <Shopping_bar active={shopping_bar} check_bar={check_side_bar} buy={buy} setbuy={setbuy}/>
        <div className='app_nav'> 
        <div className='container'>
        <NavBar logo={heroapi} bar={check_side_bar} />
        </div>
        </div>
        <Hero data={heroapi}/>
        <div className='container'>
        <Popular data={popularsales} setbuy={setbuy}/>     
        <Higlight data={highlight}/>
        <Sales data={toprateslaes} setbuy={setbuy}/>
        <Sneaker data={sneaker}/>
        <TopStories data={story} />
        </div>
        <Foater data={footerAPI}/>
        </>
    )
}
export default Home;