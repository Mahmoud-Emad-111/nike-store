import React from "react";
import Item_stories from "../item_stories/item_stories";
import './stories.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopStories=({data})=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true  ,
        autoplaySpeed:3000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
          return(
        <div className="stories">
            <h1>{data.title}</h1>
            <div className="items">
            <Slider {...settings}>
                
                {
                    data.news.map((data,index)=>{
                        return( <Item_stories data={data} key={index}/>)
                    })
                }
            </Slider>
            </div>
        </div>
    )
}
export default TopStories;