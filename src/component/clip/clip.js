import React from "react";
import './clip.css';
import { BeakerIcon, PlayCircleIcon, PlayIcon } from '@heroicons/react/24/solid'

const Clip=({image,vadio})=>{
    return(
        <div className="clip">
            <img src={image} alt=""/>
            <video autoPlay={true} loop={true} muted={true} src={vadio}>
            </video>
        <PlayCircleIcon className="paly_icon"/>
        </div>
    )
} 
export default Clip;