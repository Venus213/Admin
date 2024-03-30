import React, { useEffect, useState } from "react";
import "./teamprops.css";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Teamprops = () => {
  const [getimage, setImage] = useState(null);
  console.log(getimage);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const params = useParams()
  // console.log(params.id);

  const [getdata, setdata] = useState(
    {
      image: "",
      title: "",
      desc: "",
    }
  );
  console.log(getdata);

  useEffect((res) => {
    axios.get(`${demo}beautician/show/` + params.id)
      .then((res) => {
        // console.log(res.data.data)
        setdata(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <section className="home-section">
      <div className="wrapper">
        <div className="form_container">
          <Formik
            initialValues={getdata}
            enableReinitialize={true}
            onSubmit={async (values) => {
              const formData = new FormData(); // Create FormData object to send file
              formData.append("image", getimage); // Append image file to FormData
              formData.append("title", values.title);
              formData.append("desc", values.desc);
              // console.log(formData);

              axios
                .post(`${demo}beautician/create`, formData)
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Form name="form">
              <div className="form_wrap">
                <div className="form_item">
                  <label>Image</label>
                  <Field
                    type="file"
                    id="formFile"
                    // id="image"
                    name="image"
                    onChange={handleImageChange} // Update selected image file
                  />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>title</label>
                  <Field type="text" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>description</label>
                  <Field type="text" name="desc" id="desc" />
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
    </section>
  );
};