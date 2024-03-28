import React, { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";
import { Navber } from "../header/Navber";
import axios from "axios";
import { Bar } from "recharts";
import {
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "antd";
import CountUp from "react-countup";
import { BookOutlined, RadiusSettingOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
export const Dashboard = () => {
  const [getcontactdata, setcontactdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/contact/view")
      .then((res) => {
        // console.log(res);
        setcontactdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const totalcontact = getcontactdata.length;
  // console.log(totalcontact);

  // Book Appointmentes

  const [getbookdata, setbookdata] = useState([]);
  const totelbooking = getbookdata.length;
  // console.log(totelbooking);
  useEffect(() => {
    axios
      .get("http://localhost:3000/appoinment/view")
      .then((res) => {
        // console.log(res.data.data);
        setbookdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //   Services

  const [getservicesdata, setservicesdata] = useState([]);
  // console.log(getservicesdata);

  const totalservices = getservicesdata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/services/view")
      .then((res) => {
        // console.log(res.data.data);
        setservicesdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const nailart = getservicesdata.filter(
    (service) => service.name === "nail-art"
  );
  const totalnailart = nailart.length;

  const haircare = getservicesdata.filter(
    (service) => service.name === "hair-care"
  );
  const totalhaircare = haircare.length;

  const massage = getservicesdata.filter(
    (service) => service.name === "massage"
  );
  const totalmassage = massage.length;

  const makeup = getservicesdata.filter((service) => service.name === "makeup");
  const totalmakeup = makeup.length;

  const mehandi = getservicesdata.filter(
    (service) => service.name === "mehandi"
  );
  const totalmehandi = mehandi.length;

  const sakincare = getservicesdata.filter(
    (service) => service.name === "skin-care"
  );
  const totalsakincare = sakincare.length;

  //user

  const [getuserdata, setuserdata] = useState([]);
  // console.log(getuserdata);

  const totaluser = getuserdata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/signup/view")
      .then((res) => {
        // console.log(res.data.data);
        setuserdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //staff

  const [getteamdata, setteamdata] = useState([]);
  // console.log(getuserdata);

  const totalteam = getteamdata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/beautician/view")
      .then((res) => {
        // console.log(res.data.data);
        setteamdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //   book Appointmentes
  const data = [
    {
      name: "booking",
      uv: totelbooking,
      amt: 2400,
    },
    {
      name: "totalservices",
      uv: totalservices,
      amt: 2210,
    },
    {
      name: "totaluser",
      uv: totaluser,
      amt: 2290,
    },
    {
      name: "totalteam",
      uv: totalteam,
      amt: 2000,
    },
  ];
  const data01 = [
    { name: "nail art", value: totalnailart },
    { name: "hair care", value: totalhaircare },
    { name: "massage", value: totalmassage },
    { name: "makeup", value: totalmakeup },
    { name: "sakin care", value: totalsakincare },
    { name: "mehandi", value: totalmehandi },
  ];

  return (
    <Drawer
      gallery={
        <div style={{cursor:"pointer"}}>
          <Navber />
          <div
            className="card-contanier d-flex"
            style={{ justifyContent: "space-around" }}
          >
            <div className="card1 c1_card">
              <div className="card1-details1">
                {/* <div className="text-title1" style={{ fontSize: "200%" }}>
                  <i className="fa-solid fa-calendar-plus" />
                </div> */}
                <div style={{textAlign:"center", fontSize:"200%", color:"#673046" }}>
                <BookOutlined/>
                </div>
                <p className="text-title1">Total Appoinment</p>
                <p className="text-body1">
                  <CountUp start={0} end={totelbooking} duration={4} />
                </p>
              </div>
            </div>
            <div className="card1 c2_card">
              <div className="card1-details1">
                {/* <div className="text-title1" style={{ fontSize: "200%" }}>
                  <i class="fa-solid fa-bell-concierge"></i>
                </div> */}
                <div style={{textAlign:"center", fontSize:"200%",color:"#673046" }}>
                <RadiusSettingOutlined/>
                </div>
                <p className="text-title1">Total Services</p>
                <p className="text-body1">
                  <CountUp start={0} end={totalservices} duration={4} />
                </p>
              </div>
            </div>
            <div className="card1 c3_card">
              <div className="card1-details1">
                {/* <div className="text-title1" style={{ fontSize: "200%" }}>
                  <i class="fa-solid fa-bed"></i>
                </div> */}
                <div style={{textAlign:"center", fontSize:"200%",color:"#673046" }}>
                <UserOutlined/>
                </div>
                <p className="text-title1">Total Users</p>
                <p className="text-body1">
                  <CountUp start={0} end={totaluser} duration={4} />
                </p>
              </div>
            </div>
            <div className="card1 c4_card">
              <div className="card1-details1">
                {/* <div className="text-title1" style={{ fontSize: "200%" }}>
                  <i class="fa-solid fa-people-line"></i>
                </div> */}
                <div style={{textAlign:"center", fontSize:"200%",color:"#673046" }}>
                <TeamOutlined/>
                </div>
                <p className="text-title1">Total Beautician</p>
                <p className="text-body1">
                  <CountUp start={0} end={totalteam} duration={4} />
                </p>
              </div>
            </div>
          </div>
          {/* bar chart */}

          <div
            className="d-flex"
            style={{ justifyContent: "space-between", padding: "90px" }}
          >
            <div className="bar_chart bar_p">
              <BarChart width={400} height={300} data={data}>
                <XAxis dataKey="name" stroke="#a83d68ec" />
                <YAxis stroke="#a83d68ec"/>
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                {/* <Bar dataKey="number" fill="#00008b" barSize={30} /> */}
                {/* <Bar dataKey="uv" fill="#3792cb" barSize={30} /> */}
                <Bar dataKey="uv" fill="#a83d68ec" barSize={30} />
              </BarChart>
              <h1>Report</h1>
            </div>

            <div  className="bar_chart" >
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx={200}
                  cy={240}
                  outerRadius={130}
                  fill="#a83d68ec"
                  label
                />
                <Tooltip />
              </PieChart>
              <h1>Category Report</h1>
            </div>
          </div>

          <h5 style={{ textAlign: "center" }}>
            {/* <b>Booking Reports</b> */}
          </h5>
          {/* </ResponsiveContainer> */}

          {/* Pie Chart start For Room */}
          <div className="reports">
            <h5 style={{ textAlign: "center" }}>
              {/* <b>Booking Reports</b> */}
            </h5>
          </div>
        </div>
      }
    />
  );
};