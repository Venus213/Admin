import React, { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { AppstoreAddOutlined,CloseOutlined,DeleteOutlined,EditOutlined } from "@ant-design/icons";
import { Field, Form, Formik } from "formik";
import { Blogpropscardprops } from "./blogpropscardprops";
import "./blog.css";
import moment from "moment";

export const Blog = () => {
  const history = useHistory();

  const [getimage, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  /* view */
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/blog/view")
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
      .delete(`http://localhost:3000/blog/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*edit */

  const [getdata1, setdata1] = useState({
    image: "",
    date: "",
    title: "",
    desc: "",
    single_ref: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    // console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/blog/show/${e}`)
      .then((res) => {
        // console.log(res.data.data);
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Drawer
      team={
        <div>
          <Navber />
          <>
            {/* Page Header Start */}
            {/* <div className="page-header Bimage">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2>VENUS Blog</h2>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Page Header End */}

            {/* Blog Start */}

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
                          formData.append("date", values.date);
                          formData.append("title", values.title);
                          formData.append("desc", values.desc);
                          // console.log(formData);

                          if (getempid) {
                            axios
                              .put(
                                `http://localhost:3000/blog/update/${getempid}`,
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
                                "http://localhost:3000/blog/create",
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
                            <div className="form_item" style={{backgroundColor:"white"}} >
                              {/* <label>Image</label> */}
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
                              <label>date</label>
                              <Field type="date" name="date" />
                              <div className="date" id="date" />
                            </div>
                          </div>

                          <div className="form_wrap mt-3">
                            <div className="form_item">
                              <label>title</label>
                              <Field type="text" name="title" />
                              <div className="title" id="title" />
                            </div>
                          </div>
                          <div className="form_wrap mt-3">
                            <div className="form_item">
                              <label>description</label>
                              <Field
                                // as="textarea"
                                type="text"
                                name="desc"
                                cols="44"
                                rows="5"
                                id="desc"
                              />
                              {/* <div className="description" id="description" /> */}
                            </div>
                          </div>

                          <div className="btn">
                            <input type="submit" />
                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="blog">
              <div className="container">
              <div className="section-header text-center">
                  <h1><b>VENUS Blog</b></h1>
                </div>
                <div className="d-flex justify-content-md-end">
                  <a style={{ fontSize: 25, color: "#673046bb" }}>
                    <AppstoreAddOutlined onClick={togglePopup1} />
                  </a>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  {getdata.map((el, index) => {
                    const blogdate = moment(el.date).format("DD/MM/YYYY");
                    return (
                      <Blogpropscardprops
                        image={"http://localhost:3000/images/" + el.image}
                        date={el.date}
                        title={el.title}
                        desc={el.desc}
                        more={
                          <div style={{ listStyle: "none", cursor:"pointer" }}>
                            <li
                              className="btns"
                              onClick={() => history.push("/single/" + el._id)}
                            >
                              Read More 
                            </li>
                          </div>
                        }
                        update={
                          <EditOutlined onClick={() => togglePopup(el._id)} />
                        }
                        del={
                          <DeleteOutlined onClick={() => delhandel(el._id)} />
                        }
                        blogdate={blogdate}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Blog End */}
          </>
        </div>
      }
    />
  );
};
