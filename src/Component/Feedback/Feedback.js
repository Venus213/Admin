import React, { useEffect, useState } from "react";
import { Feedbackcardprops } from "./Feedbackcardprops";
import axios from "axios";
import { Navber } from "../header/Navber";
import Drawer from "../drawer/Drawer";
import { MdDeleteOutline } from "react-icons/md";

export const Feedback = () => {
  const [image, setImage] = useState(null);

  const [getdata, setdata] = useState([]);
//   console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/feedback/view")
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
      .delete(`http://localhost:3000/feedback/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Drawer
        feedback={
          <>
            <Navber />
            <section className="home-section">
              <div className=" p-0">
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header mb-5 p-0"
                  style={{
                    backgroundImage:
                      "url(Image/testimonial/testimonialmain.png)",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPositionY: "488px",
                  }}
                >
                  {/* <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white text1 animated slideInDown">
                        Testimonial
                      </h1>
                    </div>
                  </div> */}
                </div>
                {/* Page Header End */}

                {/* Contact Table Start */}
                <div className="container" style={{ marginBottom: "100px" }}>
                  {/* <h1 style={{ marginTop: "30px" }}>Feedback</h1> */}
                  <table className="table table-bordered" style={{border: "#e5c0c8"}}>
                    <thead>
                      <tr
                        style={{ backgroundColor: "rgb(103, 48, 70)", color: "white" }}
                      >
                        {/* <th scope="col">No</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Description</th>
                        <th scope="col">Delete</th>

                      </tr>
                    </thead>
                    <tbody style={{ backgroundColor: "#c0869d" }}>
                      {getdata.map((el, index) => {
                        return (
                          <Feedbackcardprops
                            name={el.name}
                            image={"http://localhost:3000/images/" + el.image}
                            profession={el.profession}
                            desc={el.desc}
                            delete={
                              <MdDeleteOutline
                                onClick={() => delhandel(el._id)}
                              />
                            }
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* Contact Table End */}
              </div>
            </section>
          </>
        }
      />
    </div>
  );
};
