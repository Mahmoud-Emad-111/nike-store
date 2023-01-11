import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import './item_stories.css';
const Item_stories=({data})=>{
    return(
        <div className="item_stories">
            <img src={data.img} alt=""/>
            <div className="info">
                <div className="like">
                    <HeartIcon/>
                    <h5>{data.like}</h5>
                </div>
                <div className="time">
                    <ClockIcon/>
                    <h5>{data.time}</h5>
                </div>
                <div className="hashtag">
                    <HashtagIcon/>
                    <h5>{data.by}</h5>
                </div>

            </div>
            <div className="detalis">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
                <a href={data.url} target="_blank ">{data.btn}</a>

            </div>
            
        </div>
    )
}
export default Item_stories;