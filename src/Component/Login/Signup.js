import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
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
  const [signIn, toggle] = useState(true);
  const history = useHistory()
  
  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div>
      {isOnline ? (
            <div
      className="body1"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <div className="main1">
        <input type="checkbox" id="chk" aria-hidden="true" />
        {/* <div className="signup1">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values,{resetForm}) => {
              axios
                .post("http://localhost:3000/signup/signup", values)
                .then((res) => {
                  console.log(res);
                  notify(res.data.status);
                  resetForm()
                })
                .catch((error) => {
                  console.log(error);
                  notify("Something went wrong!", "error");
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true" className="signup-label">
                Sign up
              </label>
              <Field
                className="signup-input"
                type="text"
                name="username"
                placeholder="User name"
                required=""
              />
              <Field
                className="signup-input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <Field
                className="signup-input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <button className="login-button" type="submit">Sign up</button>
            </Form>
          </Formik>
        </div> */}

        <div className="login1">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values,{resetForm}) => {
              axios
                .post("http://localhost:3000/signup/login", values)
                .then((res) => {
                  console.log(res);
                  history.push("/")
                  notify(res.data.status);
                  resetForm()
                })
                .catch((error) => {
                  console.log(error);
                  notify("Something went wrong!", "error");
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true" className="login-label">
                Login
              </label>
              <Field
                className="login-input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <Field
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <button className="login-button" type="submit">Login</button>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
            ) : (
        <NetworkErrorcompo />
      )}
    </div>
    
  );
};