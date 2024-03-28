import React from "react";

export const Contactdatacards = (props) => {
  return (
    <tr style={{backgroundColor:"#c0869d"}}>
      <td> {props.count} </td>
      <td> {props.name} </td>
      <td> {props.email} </td>
      <td> {props.subject} </td>
      <td> {props.message} </td>
      <td style={{cursor:"pointer"}}> {props.delete} </td>
    </tr>
  );
};