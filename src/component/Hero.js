import React from "react";
import Clip from "./clip/clip";
import './hero.css';
import Social_links from "./Social_links/socil_links";
const Hero=({data})=>{

    return(
        <div className="hero">
            <div className="hero_main">
            <div className="container">
                
            </div>

            <div className="content">

                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
                
            <button >{data.btntext}</button>
        </div>
            </div>
            
            <img src={data.img} alt="" className="imgae_hero"/>
                
                <div className="hero_clip">
                    {
                        data?.videos.map((val,index)=>{
                            return <Clip key={index} image={val.imgsrc} vadio={val.clip}/>
                        })
                    }
                </div>
                <div className="social ">
                    {data.sociallinks.map((icon,index) =>{
                        return <Social_links icon={icon.icon} key={index}/>
                    })}
                
                </div>
            
        </div>
    )
}
export default Hero;