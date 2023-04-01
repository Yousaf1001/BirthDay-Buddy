import React from "react";
import classes from './Img.module.css';
const Img=(props)=>{
    return(
        <img 
         className={classes.img}
         src={props.Profile_Image}
         alt=''
         width='85px'
         height='85px'
        ></img>
    )
}
export default Img;