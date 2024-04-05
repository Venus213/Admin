import axios from "axios";
import React, { useEffect, useState } from "react";
import { Teamcardprops } from "./teamcardprops";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  AppstoreAddOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
// import { Sidebar } from "../sidebar/Sidebar";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";
import { Field, Form, Formik } from "formik";
import "./team.css";
// import "./service.css";
import { Flex } from "antd";
import { NetworkErrorcompo } from "../NetworkErrorcompo";

export const Team = () => {
  // start code for a error page
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const demo = process.env.REACT_APP_DEMO


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
      .get("http://localhost:3000/beautician/view")
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
      .delete(`http://localhost:3000/beautician/delete/${e}`)
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
    title: "",
    desc: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/beautician/show/${e}`)
      .then((res) => {
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                        <h2>Beautician</h2>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Page Header End */}

                {/* Team Start */}
                <div className="section-header text-center">
                      <h1><b>Meet Our Beautician</b></h1>
                    </div>
                <div className="team">
                  <div className="container-fluid">
                    {/* <div className="section-header text-center">
                      <p>Our Beautician Team</p>
                      <h2>Meet Our Beautician</h2>
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
                                  formData.append("title", values.title);
                                  formData.append("desc", values.desc);
                                  // console.log(formData);

                                  if (getempid) {
                                    axios
                                      .put(
                                        `http://localhost:3000/beautician/update/${getempid}`,
                                        formData
                                      )
                                      .then((res) => {
                                        console.log(res);
                                      })
                                      .catch((error) => {
                                        console.log(error);
                                      });
                                  } else {
                                    axios
                                      .post(
                                        "http://localhost:3000/beautician/create",
                                        formData
                                      )
                                      .then((res) => {
                                        console.log(res);
                                        setShowPopup(false);
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
                                    {/* <CloseOutlined onClick={togglePopup} /> */}
                                    {/* <button onClick={togglePopup}>Close Popup</button> */}

                                    <div className="form_item" style={{backgroundColor:"white"}}>
                                      {/* <label>Image</label> */}
                                      <input
                                      style={{width:"100%"}}
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
                                      {/* <label>title</label> */}
                                      <Field type="text" name="title" placeholder="Enter your Title..."/>
                                      <div className="title" id="title" />
                                    </div>
                                  </div>
                                  <div className="form_wrap mt-3">
                                    <div className="form_item">
                                      {/* <label>description</label> */}
                                      <Field
                                      placeholder="Enter your Description..."
                                        type="text"
                                        name="desc"
                                        id="desc"
                                      />
                                      {/* <div className="description" id="description" /> */}
                                    </div>
                                  </div>

                                  <div className="btn">
                                    <input type="submit" style={{backgroundColor:"#724758bb"}} />
                                  </div>
                                </Form>
                              </Formik>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="d-flex justify-content-md-end">
                      <a style={{ fontSize: 25, color: "#673046bb" }}>
                        <AppstoreAddOutlined onClick={togglePopup1} />
                      </a>
                    </div>

                    <div className="box" style={{ display : "flex" , flexWrap : "wrap" , gap : "20px" , overflow : "hidden" }} >
                      {getdata.map((el, index) => {
                        return (
                          <Teamcardprops
                            image={"http://localhost:3000/images/" + el.image}
                            title={el.title}
                            desc={el.desc}
                            update={
                              <EditOutlined
                                onClick={() => togglePopup(el._id)}
                              />
                            }
                            del={
                              <DeleteOutlined
                                onClick={() => delhandel(el._id)}
                              />
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Team End */}
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
