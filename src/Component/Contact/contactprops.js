import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Contactprops = () => {
  
  const [getdata, setdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(getdata);

  useEffect((res) => {
    axios
      .get("http://localhost:3000/contact/show/" + params.id)
      .then((res) => {
        // console.log(res.data.data)
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <section className="home-section">
      <div className="wrapper">
        <div className="form_container">
          <Formik
            initialValues={getdata}
            enableReinitialize={true}
            onSubmit={async (values) => {
              const formData = new FormData(); // Create FormData object to send file
              formData.append("name", values.name); // Append image file to FormData
              formData.append("email", values.email);
              formData.append("subject", values.subject);
              formData.append("message", values.message);
              // console.log(formData);

              axios
                .post("http://localhost:3000/contact/create", formData)
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
                  <label>name</label>
                  <Field type="text" name="name" />
                  <div className="name" id="name" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>email</label>
                  <Field type="text" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>subject</label>
                  <Field type="text" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>message</label>
                  <Field as="textarea" name="title" />
                  <div className="title" id="title" />
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