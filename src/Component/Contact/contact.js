import { Navber } from "../header/Navber";
import Drawer from "../drawer/Drawer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Contactdatacards } from "./contactdatacards";
import { MdDeleteOutline } from "react-icons/md";

export const Contact = () => {
  const [getalldata1, setalldata1] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/contact/view")
      .then((res) => {
        // console.log(res);
        setalldata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/contact/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Drawer
      contact={
        <div>
          <Navber />
          {/* <div className="page-header Cimage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Contact</h2>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact start*/}
          <div className="contact" style={{marginTop:"40px "}}>
            <table
              className="table table-bordered"
              style={{
                backgroundColor: "#673046",
                border: "#e5c0c8",
                color: "#e5dbdb",
              }}
            >
              <tbody>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Delete</th>
                </tr>

                {getalldata1.map((el, index) => {
                  return (
                    <Contactdatacards
                      count={index + 1}
                      name={el.name}
                      email={el.email}
                      subject={el.subject}
                      message={el.message}
                      delete={
                        <MdDeleteOutline onClick={() => delhandel(el._id)} />
                      }
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
};
