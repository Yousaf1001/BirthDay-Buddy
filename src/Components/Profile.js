import React from "react";
import Img from "./Img";
import classes from './Profile.module.css'
const Profile=(props)=>{
    return(
        <div key={props.id} className={classes.content_wrapper}>
            <div><Img Profile_Image={props.Profile_Image}></Img></div>
            <div>
            <p>{props.Name}</p>
            <p>{props.Age}</p>
            </div>
            
        </div>
    )
}
export default Profile;