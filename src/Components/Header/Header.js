import React, { useState } from "react";
import "./Navbar.css";
import "./Header.css";
import logo from "../../assets/logo1.png";
import IEEElogo from "../../assets/ieeeLogo.jpeg";
import DSIR from "../../assets/our_partners/DSIR.png";
import collegeLogo from "../../assets/akgec_logo.png";
import Navbar from "./Navbar";

import Popup from "../popup/Popup";

function Header(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    
    <>
      <div className="container-lg d-flex justify-content-between align-items-center py-3 flex-wrap">
        <div className="d-flex align-items-center">
          <img className="logo" src={logo} width="120px" alt="logo" />
          <img className="logo" src={IEEElogo} width="120px" alt="logo" />
        </div>
        <h5 className="ms-4 font-weight-bold name-heading text-center">
          <b className="second">
            2<sup>nd</sup>{" "}
          </b>
          International Conference on Advancements and Key Challenges in Green
          Energy and Computing
        </h5>
        <div className="d-flex align-items-center">
          <img className="logo" src={collegeLogo} width="80px" alt="logo" />
          <img className="logo" src={DSIR} width="120px" alt="logo" />
        </div>
      </div>
      <Navbar active={props.active} />
      <Popup show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
