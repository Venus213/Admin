import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

export const Gallerycardprops = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
      <div
        className="portfolio-wrap"
        style={{
          overflow: "hidden",
          position: "relative",
          listStyle: "none",
          height: "235px",
        }}
      >
        <div className="w-100 h-100 border ">
          <img
            src={props.image}
            alt="Portfolio Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div style={{ position: "absolute", cursor:"pointer" }}>
        <span>{props.del}</span>
      </div>
    </div>
  );
};
