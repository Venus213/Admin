import React from "react";

export const Appoinmentdataprops = (props) => {
  return (
    <tr style={{backgroundColor:"#c0869d"}}>
      <td> {props.count} </td>
      <td> {props.name} </td>
      <td> {props.email} </td>
      <td> {props.services} </td>
      <td> {props.beautician} </td>
      <td> {props.date} </td>
      <td> {props.desc} </td>
      <td style={{cursor:"pointer"}}> {props.delete} </td>
    </tr>
  );
};