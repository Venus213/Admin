import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";
import {
  AppstoreAddOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Field, Form, Formik } from "formik";
import { Pricecardprops } from "./pricecardprops";
import { NetworkErrorcompo } from "../NetworkErrorcompo";

export const Price = () => {
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
  const params = useParams();
  // console.log(params.name);

  const [getimage, setImage] = useState(null);
  // const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [getdata, setdata] = useState([]);
  // console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/price/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel = (e) => {
    // console.log(e);
    axios
      .delete(`http://localhost:3000/price/delete/${e}`)
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
    price: "",
    category: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    // console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/price/show/${e}`)
      .then((res) => {
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [getcat, setcat] = useState();
  // console.log(getcat);

  const [getname, setname] = useState([]);
  // console.log(getname);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/price/nameshow/?name=${params.name}`)
      .then((res) => {
        // console.log(res);
        setname(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      {isOnline ? (
        <Drawer
          team={
            <div>
              <Navber />
              <>
                {/* Page Header Start */}
                <div className="page-header Pimage">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h2>Pimage</h2>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Page Header End */}

                {/* category start */}
                
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
                              formData.append("category", getcat);
                              formData.append("price", values.price);

                              if (getempid) {
                                axios
                                  .put(
                                    `http://localhost:3000/price/update/${getempid}`,
                                    formData
                                  )
                                  .then((res) => {
                                    console.log(res);
                                    setShowPopup(false);
                                  })
                                  .catch((error) => {
                                    console.log(error);
                                  });
                              } else {
                                axios
                                  .post(
                                    "http://localhost:3000/price/create",
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
                                <CloseOutlined
                                  onClick={togglePopup}
                                  style={{ paddingLeft: "410PX" }}
                                />
                                {/* <CloseOutlined onClick={togglePopup} /> */}
                                <div
                                  className="form_item"
                                  style={{ backgroundColor: "white" }}
                                >
                                  {/* <label>Image</label> */}
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
                                  {/* <label>Title</label> */}
                                  <Field
                                    type="text"
                                    name="title"
                                    placeholder="Enter your Title..."
                                  />
                                  <div className="title" id="title" />
                                </div>
                              </div>
                              <select
                                style={{ width: "100%", padding: "10px" }}
                                className="mt-3"
                                name=""
                                id=""
                                onChange={(e) => setcat(e.target.value)}
                              >
                                <option value="">--selected services--</option>
                                <option value="nail-art">nail art</option>
                                <option value="hair-care">hair care </option>
                                <option value="mehndi">Mehndi </option>
                                <option value="makeup">makeup </option>
                                <option value="massage">massage </option>
                                <option value="skin-care">skin care </option>
                              </select>
                              <div className="form_wrap mt-3">
                                <div className="form_item">
                                  {/* <label>Price</label> */}
                                  <Field
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Enter your Price..."
                                  />
                                  {/* <div className="description" id="description" /> */}
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
                          {/* <button onClick={() => setShowPopup(true)}>Close Popup</button> */}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="service">
                  <div className="container">
                    <div className="section-header text-center">
                      <h4>Our Salon Price</h4>
                    </div>
                    <div className="d-flex justify-content-md-end">
                      <a style={{ fontSize: 25, color: "#673046bb" }}>
                        <AppstoreAddOutlined
                          onClick={() => setShowPopup(true)}
                        />
                      </a>
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                      {getname.map((el, index) => {
                        return (
                          <Pricecardprops
                            image={"http://localhost:3000/images/" + el.image}
                            // date={el.date}
                            title={el.title}
                            price={"₹ " + el.price + "/-"}
                            update={
                              <EditOutlined
                                onClick={() => togglePopup(el._id)}
                              />
                            }
                            delete={
                              <DeleteOutlined
                                onClick={() => delhandel(el._id)}
                              />
                            }
                          />
                        );
                      })}
                      {/* <div className="col-lg-4 col-md-6">
                                      <div className="service-item">
                                          <div className="service-img" style={{ height: 235 }}>
                                              <img src="image/Hair/Hair Cut/hairs-3.jpg" alt="Image" />
                                          </div>
                                          <h3> Hair Cut </h3>
                                          <p>
                                              Hair care routines can differ based on a person's culture and hair
                                              type. The frequency of steps in a hair care routine depends on a
                                              person's lifestyle, preferences,&nbsp;and&nbsp;hair&nbsp;type.
                                          </p>
                                          <a className="btn" href="Price/NailArt.html">
                                              Learn More
                                          </a>
                                      </div>
                                  </div> */}
                    </div>
                  </div>
                </div>
                {/* category end */}
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
