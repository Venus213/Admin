import React from "react";

export const Teamcardprops = (props) => {
  return (
    <div className="team-card" style={{width : " calc(25% - 27px)" }} >
      <div className="imgBx">
        <img src={props.image} alt="images" />
      </div>
      <div className="details" style={{cursor:"pointer"}}>
        <h2>{props.title}</h2>
        <p>
          {props.desc}
        </p>
        <span>
            {props.del}
          </span>
        <span>
            {props.update}
          </span>
      </div>
    </div>
  );
};