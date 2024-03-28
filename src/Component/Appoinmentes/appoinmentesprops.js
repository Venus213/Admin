import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Appoinmentesprops = () => {
  const [getdata, setdata] = useState({
    name: "",
    email: "",
    services: "",
    beautician: "",
    date: "",
    time: "",
    desc: "",
  });
  console.log(getdata);

  useEffect((res) => {
    axios
      .get("http://localhost:3000/appoinment/show/" + params.id)
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
              formData.append("services", values.services);
              formData.append("beautician", values.beautician);
              formData.append("date", values.beautician);
              formData.append("time", values.time);
              formData.append("desc", values.desc);
              // console.log(formData);

              axios
                .post("http://localhost:3000/appoinment/create", formData)
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
                  <label>services</label>
                  <Field type="text" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>beautician</label>
                  <Field type="option" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>date</label>
                  <Field type="datetime-local" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>time</label>
                  <Field type="number" name="title" />
                  <div className="title" id="title" />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <label>description</label>
                  <Field type="text" name="desc" id="desc" />
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
