import React from "react";
import Img from "./Img";
import classes from './Profile.module.css'
const Profile=(props)=>{
    return(
        <div key={props.id} className={classes.content_wrapper}>
            <div  className={`${classes.box} ${classes.wrapper_Item}` }> <Img Profile_Image={props.Profile_Image}></Img></div>
            <div>
            <p className={classes.namePara}>{props.Name}</p>
            <p className={classes.agePara}>{props.Age}</p>
            </div>
            
        </div>
    )
}
export default Profile;