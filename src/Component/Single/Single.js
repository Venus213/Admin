import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";

export const Single = () => {
  // start code for a error page
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  // end code for a error page
  const params = useParams();
  // console.log(params.id);

  const [getdata, setdata] = useState({ image: "" });
  console.log(getdata);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog/findbyid?id=${params.id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata]);

  return (
    <Drawer
    team={
    <div>
      <Navber />
      {isOnline ? (
        <div className="blog-single-page">
          {/* Page Header Start */}
          <div className="page-header Simage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>hair Care</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}

          {/*single page */}
          <div className="container">
            <section className="single">
              <div className="single-image">
                <img
                  src={"http://localhost:3000/images/" + getdata.image}
                  alt="Image"
                />
              </div>
              <div className="single-content">
                <h1>{getdata.title}</h1>
                <p>{getdata.desc}</p>
              </div>
            </section>
          </div>
          {/* Single Page End */}
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
    </div>
    }
    />
  );
};
