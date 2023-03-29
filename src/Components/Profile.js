import React from "react";
import Img from "./Img";
const Profile=(props)=>{
    return(
        <ul key={props.id}>
            <li>{props.Name}</li>
            <li>{props.Age}</li>
            <li><Img Profile_Image={props.Profile_Image}></Img></li>
        </ul>
    )
}
export default Profile;