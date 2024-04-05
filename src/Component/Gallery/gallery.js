import { AppstoreAddOutlined, CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Gallerycardprops } from "./gallerycardprops";
import { Navber } from "../header/Navber";
import Drawer from "../drawer/Drawer";
import { Form, Formik } from "formik";
import { NetworkErrorcompo } from "../NetworkErrorcompo";

export const Portfolio = () => {
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
  const history = useHistory();

  const [getimage, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  const [getdata, setdata] = useState([]);
  const [getfilter, setfildata] = useState("all");
  // console.log(getfilter);
  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel = (e) => {
    axios
      .delete(`http://localhost:3000/gallery/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /***** Edit */

  const [getdata1, setdata1] = useState({
    image: "",
    category: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    // console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/gallery/show/${e}`)
      .then((res) => {
        // console.log(res.data.data);
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [getcat, setcat] = useState();
  // console.log(getcat);

  return (
    <div>
      {isOnline ? (
        <Drawer
          gallery={
            <div>
              <Navber />
              <>
                {/* Page Header Start */}
                {/* <div className="page-header Gimage">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h2>Gallery</h2>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Page Header End */}

                {/* Portfolio Start */}

                <div className="portfolio">
                  <div className="container">
                    {/* <div className="section-header text-center">
                      <p>Barber Image Gallery</p>
                      <h2>Some Images From Our Barber Gallery</h2>
                    </div> */}

                    <div className="container-fluid">
                      {showPopup && (
                        <>
                          <div className="popup">
                            <div className="popup-inner">
                              <Formik
                                initialValues={getdata1}
                                enableReinitialize={true}
                                onSubmit={async (values) => {
                                  const formData = new FormData(); // Create FormData object to send file
                                  formData.append("image", getimage); // Append image file to FormData
                                  formData.append("category", getcat);
                                  axios
                                    .post(
                                      "http://localhost:3000/gallery/create",
                                      formData
                                    )
                                    .then((res) => {
                                      console.log(res);
                                      setShowPopup(false);
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });
                                  // }
                                }}
                              >
                                <Form name="form">
                                  <div className="form_wrap">
                                    <CloseOutlined
                                      onClick={togglePopup}
                                      style={{ paddingLeft: "410PX" }}
                                    />
                                    <div
                                      className="form_item"
                                      style={{ backgroundColor: "white" }}
                                    >
                                      <input
                                        style={{ width: "100%" }}
                                        type="file"
                                        id="formFile"
                                        // id="image"
                                        name="image"
                                        onChange={(e) =>
                                          setImage(e.target.files[0])
                                        } // Update selected image file
                                      />
                                    </div>
                                  </div>
                                  <div className="form_wrap mt-3">
                                    <div className="form_item">
                                      <select
                                        name=""
                                        id=""
                                        onChange={(e) => setcat(e.target.value)}
                                      >
                                        <option value="">
                                          --selected services--
                                        </option>
                                        <option value="hair-care">
                                          hair care
                                        </option>
                                        <option value="nail-art">
                                          nail art
                                        </option>
                                        <option value="makeup">makeup</option>
                                        <option value="skin-care">
                                          skin care
                                        </option>
                                        <option value="massage">massage</option>
                                        <option value="mehandi">mehandi</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="btn">
                                    <input
                                      type="submit"
                                      style={{ backgroundColor: "#724758bb" }}
                                    />
                                  </div>
                                </Form>
                              </Formik>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="section-header text-center">
                      <h1><b>Gallery of VENUS</b></h1>
                    </div>
                    <div className="d-flex justify-content-md-end">
                      <div style={{ listStyle: "none" }}>
                        <li
                          href=""
                          style={{ fontSize: 25, color: "#673046bb" }}
                        >
                          <AppstoreAddOutlined onClick={togglePopup1} />
                        </li>
                      </div>
                    </div>

                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
                    ></div>
                    <div style={{ listStyle: "none" }}>
                      <div className="row">
                        <div className="col-12">
                          <ul id="portfolio-flters">
                            <div style={{ listStyle: "none" }}>
                              <li
                                onClick={() => setfildata("all")}
                                className="filter-active"
                              >
                                All
                              </li>

                              <li onClick={() => setfildata("hair-care")}>
                                Hair Care
                              </li>
                              <li onClick={() => setfildata("nail-art")}>
                                Nail Art
                              </li>
                              <li onClick={() => setfildata("makeup")}>
                                Makeup
                              </li>
                              <li onClick={() => setfildata("skin-care")}>
                                Skin Care
                              </li>
                              <li onClick={() => setfildata("massage")}>
                                Massage
                              </li>
                              <li onClick={() => setfildata("mehandi")}>
                                Mahendi
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row portfolio-container">
                      {getdata
                        .filter(
                          (el) =>
                            getfilter === "all" || el.category === getfilter
                        )
                        .map((el, index) => {
                          return (
                            <Gallerycardprops
                              image={"http://localhost:3000/images/" + el.image}
                              del={
                                <span className="delete-btn">
                                  <svg
                                  
                                    onClick={() => delhandel(el._id)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="16"
                                    viewBox="0 0 14 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M2.615 16C2.155 16 1.771 15.846 1.463 15.538C1.15433 15.2293 1 14.845 1 14.385V2H0V1H4V0.23H10V1H14V2H13V14.385C13 14.845 12.846 15.229 12.538 15.537C12.2293 15.8457 11.845 16 11.385 16H2.615ZM4.808 13H5.808V4H4.808V13ZM8.192 13H9.192V4H8.192V13Z"
                                      fill="#673046bb"
                                    />
                                  </svg>
                                </span>
                              }
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
                {/* Portfolio Start */}
              </>
            </div>
          }
        />
      ) : (
        <NetworkErrorcompo />
      )}
    </div>
  );
};
