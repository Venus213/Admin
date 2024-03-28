import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Servicecardprops = (props) => {
    const history = useHistory();
    return (
        <div className="col-lg-4 col-md-6">
            <div className="service-item">
                <div className="service-img" style={{ height: 235 }}>
                    <img src={props.image} alt="Image" />
                </div>
                <h3> {props.name} </h3>
                <p>
                   {props.desc}
                </p>
                <li className="btn"  >
                     {props.more}
                </li>
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
    )
}