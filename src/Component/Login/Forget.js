import React from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";

const Forget = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        mno: ""
      }}
      onSubmit={async (values) => {
        // console.log(values);
        axios.get("http://localhost:3000/user/forgetpass")
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
      }}
    >
      <Form>
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required="true"
        />
        <Field type="tel" name="mno" id="mno" placeholder="Mobile No" required="true" />
        <button className="user_button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Forget;


// import React from "react";
// import axios from "axios"; // Import Axios
// import { Formik, Field, Form } from "formik";

// const Forget = () => {
//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         mno: ""
//       }}
//       onSubmit={async (values) => {
//         // console.log(values);
//         axios.get("http://localhost:3000/user/forgetpass")
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//         // console.log(values);
//         // // const lalala = localStorage.getItem("")
//         // axios
//         //   //   .post("http://localhost:3000/user/forgetpass", values,{headers:{token:lalala}})
//         //   .get("http://localhost:3000/user/forgetpass")

//         //   .then((res) => {
//         //     console.log(res);
//         //     // sessionStorage.setItem("usertoken", res.data.token);
//         //     // history.push("/");
//         //   })
//         //   .catch((error) => {
//         //     console.log(error);
//         //   });
//         // setSubmitting(false);
//       }}
//     >
//       <Form>
//         <Field
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Email Address"
//           required="true"
//         />
//         <Field type="tel" name="mno" id="mno" placeholder="Mobile No" required="true" />
//         <button className="user_button" type="submit">
//           Submit
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default Forget;