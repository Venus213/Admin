import React from "react";

export const Blogpropscardprops = (props) => {
  return (
    <div style={{width:'32%'}}>
      <div className="col-lg-4 col-md-6 w-100">
        <div className="blog-item m-0">
          <div className="blog-img">
            <img src={props.image} alt="Blog" style={{ height: "300px" }} />
          </div>
          <div className="blog-meta">
          <span>{props.blogdate}</span>
          </div>
          <div className="blog-text">
          {/* <span>{props.blogdate}</span> */}
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            {props.more}
            <div className="flex-services gap-10">
            <span className="delete-btn-blog">{props.del}</span>
            <span className="delete-btn-blog">{props.update}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};