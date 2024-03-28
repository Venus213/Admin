import React from "react";

export const Offercardprops = (props) => {
  return (
    <div className="col-4 my-4">
      <div className="card">
        <div className="card-image">
          <img
            src={props.image}
            alt=""
          />
        </div>
        <div className="card-contant">
          <div className="card-hed">
            <h3> {props.title} </h3>
          </div>
          <div className="card-price">
            <b> {props.price} </b>
          </div>
          <div className="card-desc">
            <p>
              {props.desc}
            </p>
          </div>
          <div className="w-100 flex gap-10" style={{cursor:"pointer"}}>
            {props.update}
            {props.del}
          </div>
        </div>
      </div>
    </div>
  );
};
