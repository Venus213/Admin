import React from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Pricecardprops = (props) => {
  // const history = useHistory();
  return (
    <div style={{width:'32%'}}>
      <div className="col-lg-4 col-md-6 w-100" >
        <div className="service-item"  style={{cursor:"pointer"}}>
          <div className="service-img"style={{ height: 290 }}>
            <img src={props.image} alt="Image" />
          </div>
          <h3> {props.title} </h3>
          <h2>{props.price}</h2>
          <div className="flex-services gap-10" style={{cursor:"pointer"}}>
                <span className="delete-btn-service">
                    {props.update}
                </span>
                <span className="delete-btn-service"> 
                    {props.delete}
                </span>
                </div>
        </div>
      </div>
    </div>
  );
};
