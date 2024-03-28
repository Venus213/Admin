import React from "react";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";
import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Appoinmentdataprops } from "./Appoinmentdataprops";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import { MdDeleteOutline } from "react-icons/md";
import { NetworkErrorcompo } from "../NetworkErrorcompo";

export const Appointmentes = () => {
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

  const componentPDF = useRef();
  const [getappoinment, setappoinment] = useState([]);

  const count = getappoinment.length;

  useEffect(() => {
    const registerAppointment = async () => {
      axios
        .get("http://localhost:3000/appoinment/view")
        .then((res) => {
          setappoinment(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    registerAppointment();
  });

  const genratePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "appointmentData",
  });

  const history = useHistory();

  const [getimage, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  /**view */
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/appoinment/view")
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel = (e) => {
    axios
      .delete(`http://localhost:3000/appoinment/delete/${e}`)
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
    name: "",
    profession: "",
  });
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    setShowPopup(!showPopup);
    axios
      .get("http://localhost:3000/appoinment/show/${e}")
      .then((res) => {
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [getalldata, setalldata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appoinment/view")
      .then((res) => {
        setalldata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [getfilter, setfildata] = useState("all");

  const [gettalldata, settalldata] = useState([]);
  const signupcount = gettalldata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/signup/view")
      .then((res) => {
        settalldata(res.data.data);
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
                {/* <div className="page-header aimage">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h2>Appointment</h2>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Page Header End */}
                {/* Appointment Start */}
                <div style={{display : "flex" , justifyContent : "end"}}>
                  <div>
                    <button
                      type="submit"
                      onClick={genratePDF}
                      style={{ backgroundColor: "#673046" }}
                    >
                      PDF
                    </button>
                  </div>
                </div>

                <div ref={componentPDF}>
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
                        <th>Services</th>
                        <th>Beautician</th>
                        <th>Date</th>
                        <th>Desc</th>
                        <th>Delete</th>
                      </tr>

                      {getalldata.map((el, index) => {
                        const date = moment().format("DD/MM/YYYY");
                        return (
                          <Appoinmentdataprops
                            count={index + 1}
                            name={el.name}
                            email={el.email}
                            services={el.services}
                            beautician={el.beautician}
                            date={date}
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

                {/* Appointment End */}
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
