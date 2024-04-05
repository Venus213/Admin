import {
  BlockOutlined,
  BookOutlined,
  CloseOutlined,
  ContactsOutlined,
  FileImageOutlined,
  FormOutlined,
  GiftOutlined,
  LayoutOutlined,
  RadiusSettingOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Drawer = (props) => {
  const [drawerhandel, setdrawerhandel] = useState(false);
  const history = useHistory();

  return (
    <div>
      <div className="drawer">
        <div className="w-100">
          <div className="flex">
            <div
              className="w-20 slider-list"
              style={{ width: drawerhandel === false ? "15%" : "5%" }}
            >
              <div
                className=""
                style={{
                  fontSize: "30px",
                  width: "100%",
                }}
              >
                <div>
                  <UnorderedListOutlined
                    className="icon-style"
                    style={{
                      display: drawerhandel === false ? "none" : "block",
                      textAlign: "start",
                      paddingLeft: "20px",
                    }}
                    onClick={() => {
                      setdrawerhandel(false);
                    }}
                  />
                </div>
                <div>
                  <CloseOutlined
                    className="icon-style1"
                    style={{
                      display: drawerhandel === false ? "block" : "none",
                      textAlign: "end",
                    }}
                    onClick={() => {
                      setdrawerhandel(true);
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "60px",
                  fontSize: "22px",
                  marginLeft: "23px",
                }}
              >
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <i
                        style={{ display: "flex", alignItems: "center" }}
                        onClick={() => history.push("/")}
                      >
                        <div style={{ margin: "0", marginTop: "1px" ,cursor:"pointer" }}>
                          <LayoutOutlined />
                        </div>
                        <div>
                          <span
                            style={{
                              paddingLeft: "30px",
                              cursor: "pointer",
                              fontSize: "22px",
                            }}
                          >
                            Dashboard
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>

                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        style={{ display: "flex", alignItems: "center" }}
                        onClick={() => history.push("/team")}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                          <TeamOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Team
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>

                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/gallery")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                          <FileImageOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Gallery
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>
                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/offer")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                          <GiftOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Offer
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>

                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/service")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                          <RadiusSettingOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Services
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>

                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/blog")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "5px",cursor:"pointer" }}>
                          <BlockOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Blog
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>
                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/appoinmentes")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                          <BookOutlined />
                        </div>

                        <div>
                          <span
                            style={{ paddingLeft: "31px", cursor: "pointer" }}
                          >
                            Appoinment
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>
                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/contact")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                          <ContactsOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Contact
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>


                  <div className="d-flex align-item-center">
                    <div style={{ marginTop: "10px", fontSize: "22px" }}>
                      <i
                        onClick={() => history.push("/feedback")}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ margin: "0", marginTop: "1px",cursor:"pointer" }}>
                        <FormOutlined />
                        </div>
                        <div>
                          <span
                            style={{ paddingLeft: "30px", cursor: "pointer" }}
                          >
                            Feedback
                          </span>
                        </div>
                      </i>
                    </div>
                  </div>



                </div>
              </div>
            </div>
            <div
              className="w-80 main-part"
              style={{ width: drawerhandel === false ? "85%" : "95%" }}
            >
              <div
                onClick={() => {
                  setdrawerhandel(true);
                }}
              >
                <div>
                  {props.team}
                  {props.gallery}
                  {props.contact}
                  {props.feedback}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
