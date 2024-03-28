import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";
import { Servicecardprops } from "./Servicecardprops";
import {
  AppstoreAddOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Field, Form, Formik } from "formik";
import "./service.css";
import { NetworkErrorcompo } from "../NetworkErrorcompo";

export const Services = () => {
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
  // const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  const [getdata, setdata] = useState([]);
  // console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/services/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/services/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /***** Edit ********/

  const [getdata1, setdata1] = useState({
    image: "",
    name: "",
    desc: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/services/show/${e}`)
      .then((res) => {
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
        team={
          <div>
            <Navber />
            <>
              {/* Page Header Start */}
              {/* <div className="page-header Timage">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h2>Services</h2>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Page Header End */}
  
              {/* Service Start */}
  
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
                            formData.append("name", getcat);
                            formData.append("desc", values.desc);
                            // console.log(formData);
  
                            if (getempid) {
                              axios
                                .put(
                                  `http://localhost:3000/services/update/${getempid}`,
                                  formData
                                )
                                .then((res) => {
                                  console.log(res);
                                  setShowPopup(false)
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            } else {
                              axios
                                .post(
                                  "http://localhost:3000/services/create",
                                  formData
                                )
                                .then((res) => {
                                  console.log(res);
                                  setShowPopup(false)
                                })
                                .catch((error) => {
                                  console.log(error);
                                }); 
                            }
                          }}
                        >
                          <Form name="form">
                            <div className="form_wrap">
                            <CloseOutlined onClick={togglePopup} style={{paddingLeft:"410PX"}}/>
                              <div className="form_item" style={{backgroundColor:"white"}}>
                                <input
                                style={{width:"100%"}}
                                  type="file"
                                  id="formFile"
                                  // id="image"
                                  name="image"
                                  onChange={(e) => setImage(e.target.files[0])} // Update selected image file
                                />
                              </div>
                            </div>
                            <div className="form_wrap mt-3">
                              <div className="form_item">
                                {/* <label>Name</label> */}
                                {/* <Field type="text" name="name" /> */}
                                <select
                                  name=""
                                  id=""
                                  onChange={(e) => setcat(e.target.value)}
                                >
                                  <option value="">selected services</option>
                                  <option value="hair-care">hair care</option>
                                  <option value="nail-art">nail art</option>
                                  <option value="makeup">makeup</option>
                                  <option value="skin-care">skin care</option>
                                  <option value="massage">massage</option>
                                  <option value="mehndi">mehndi</option>
                                </select>
                                <div className="title" id="name" />
                              </div>
                            </div>
                            <div className="form_wrap mt-3">
                              <div className="form_item">
                                {/* <label>description</label> */}
                                <Field type="text" name="desc" id="desc" placeholder="Enter your Description..." />
                                {/* <div className="description" id="description" /> */}
                              </div>
                            </div>
  
                            <div className="btn">
                              <input type="submit" style={{backgroundColor:"#724758bb"}}/>
                            </div>
                          </Form>
                        </Formik>
                        {/* <button onClick={togglePopup1}>Close Popup</button> */}
                      </div>
                    </div>
                  </>
                )}
              </div>
  
              <div className="service">
                <div className="container">
                  {/* <div className="section-header text-center">
                    <p>Our Salon Services</p>
                    <h2>Best Salon and Beautician Services for You</h2>
                  </div> */}
                  <div className="d-flex justify-content-md-end">
                    <a style={{ fontSize: 25, color: "#673046bb" }}>
                      <AppstoreAddOutlined onClick={togglePopup1} />
                    </a>
                  </div>
                  <div className="row">
                    {getdata.map((el, index) => {
                      return (
                        <Servicecardprops
                          image={"http://localhost:3000/images/" + el.image}
                          date={el.date}
                          name={el.name}
                          desc={el.desc}
                          update={
                            <div
                            className="card-update delete-btn-offer"
                            onClick={() => togglePopup(el._id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              style={{margin:"0px"}}
                            >
                              <path
                                d="M19 10C18.7348 10 18.4804 10.1054 18.2929 10.2929C18.1054 10.4804 18 10.7348 18 11V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H9C9.26522 2 9.51957 1.89464 9.70711 1.70711C9.89464 1.51957 10 1.26522 10 1C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM4 10.76V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H9.24C9.37161 16.0008 9.50207 15.9755 9.62391 15.9258C9.74574 15.876 9.85656 15.8027 9.95 15.71L16.87 8.78L19.71 6C19.8037 5.90704 19.8781 5.79644 19.9289 5.67458C19.9797 5.55272 20.0058 5.42201 20.0058 5.29C20.0058 5.15799 19.9797 5.02728 19.9289 4.90542C19.8781 4.78356 19.8037 4.67296 19.71 4.58L15.47 0.29C15.377 0.196272 15.2664 0.121877 15.1446 0.0711086C15.0227 0.0203399 14.892 -0.00579834 14.76 -0.00579834C14.628 -0.00579834 14.4973 0.0203399 14.3754 0.0711086C14.2536 0.121877 14.143 0.196272 14.05 0.29L11.23 3.12L4.29 10.05C4.19732 10.1434 4.12399 10.2543 4.07423 10.3761C4.02446 10.4979 3.99924 10.6284 4 10.76ZM14.76 2.41L17.59 5.24L16.17 6.66L13.34 3.83L14.76 2.41ZM6 11.17L11.93 5.24L14.76 8.07L8.83 14H6V11.17Z"
                                fill="#673046bb"
                              />
                            </svg>
                          </div>
                          }
                          del={
                            <div
                              className="card-delete delete-btn-offer"
                              onClick={() => delhandel(el._id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="16"
                                viewBox="0 0 14 16"
                                fill="none"
                                style={{margin:"0px"}}
                              >
                                <path
                                  d="M2.615 16C2.155 16 1.771 15.846 1.463 15.538C1.15433 15.2293 1 14.845 1 14.385V2H0V1H4V0.23H10V1H14V2H13V14.385C13 14.845 12.846 15.229 12.538 15.537C12.2293 15.8457 11.845 16 11.385 16H2.615ZM4.808 13H5.808V4H4.808V13ZM8.192 13H9.192V4H8.192V13Z"
                                  fill="#673046bb"
                                />
                              </svg>
                            </div>
                          }

                          delete={
                            <div
                            className="card-delete delete-btn-offer"
                            onClick={() => delhandel(el._id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="16"
                              viewBox="0 0 14 16"
                              fill="none"
                              style={{margin:"0px"}}
                            >
                              <path
                                d="M2.615 16C2.155 16 1.771 15.846 1.463 15.538C1.15433 15.2293 1 14.845 1 14.385V2H0V1H4V0.23H10V1H14V2H13V14.385C13 14.845 12.846 15.229 12.538 15.537C12.2293 15.8457 11.845 16 11.385 16H2.615ZM4.808 13H5.808V4H4.808V13ZM8.192 13H9.192V4H8.192V13Z"
                                fill="#673046bb"
                              />
                            </svg>
                          </div>
                          }
                          more={
                            <b onClick={() => history.push("/price/"+el.name)}>Learn More</b>
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Service End */}
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
