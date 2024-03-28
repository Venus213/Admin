import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import {  useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Galleryprops = () => {
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
      category:"",
    }
  );
  console.log(getdata);

  useEffect((res) => {
    axios.get("http://localhost:3000/gallery/show/" + params.id)
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
            initialValues={{
              image: "",
              category: ""
            }}
            onSubmit={async (values) => {
                const formData = new FormData(); // Create FormData object to send file
                formData.append("image", getimage);
                formData.append("category", values.category);
                 // Append image file to FormData
                // console.log(formData);

              axios
                .post("http://localhost:3000/gallery/create", formData)
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
                  <input
                    type="file"
                    id="formFile"
                    // id="image"
                    name="image"
                    onChange={handleImageChange} // Update selected image file
                  />
                </div>
                <div className="form_item">
                  <label>category</label>
                  <Field
                    // type="file"
                    id="formFile"
                    // id="image"
                    name="category"
                  />
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