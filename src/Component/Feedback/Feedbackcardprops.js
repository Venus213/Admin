import React from "react";
const contentStyle = {
  height: "260px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const Feedbackcardprops = (props) => {
  return (
    <tr>
        <td>{props.name}</td>  
        <td> <img src={props.image} style={{width:"50px", height:"50px"}} alt="" /> </td>
        <td>{props.profession}</td> 
        <td>{props.desc}</td>
        <td style={{cursor:"pointer"}}> {props.delete} </td>   
        
    </tr>
)
};