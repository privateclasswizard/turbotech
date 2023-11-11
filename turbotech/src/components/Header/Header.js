import React, { useState } from "react";
import "../../assets/css/navBar.css";
import iconbutton from "../../assets/icon/person-fill.svg";
// import { logo } from "../assets/icon/Tech.svg";
import btnmenu from "../../assets/icon/list.svg"
import Sidebar from "./Sidebar/index.jsx"
import "./styles.js"

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const ShowSiderBar= () => setSidebar(!sidebar);

  return (
    <header>
      <nav className="navbar">
        <div className="div-logo">
          <div>
            <a href="/">
              <div className="img-div-nav">
                <p className="logo">{"</>"}</p>
              </div>
            </a>
          </div>
          <div className="logo-titulo">
            <a href="/" className="Turbo">
              Turbo
            </a>
            <a href="/" className="Tech">
              Tech
            </a>
          </div>
        </div>
        <button className="btnMobile" onClick={ShowSiderBar}>
        {sidebar && <Sidebar active={setSidebar}/>} 
        <img src={btnmenu}/></button>
        <ul className="navbar-menu">
          <li className="item-nav-menu">
            <div className=" divlinknavbar">
            <a href="/" className="linknavbar">
            {"link1"}
            </a>
            </div>
          </li>
          <li className="item-nav-menu">
            <div className=" divlinknavbar">
            <a href="/" className="linknavbar">
            {"link2"}
            </a>
            </div>
          </li>
          <li className="item-nav-menu">
            <div className=" divlinknavbar">
            <a href="/" className="linknavbar">
            {"link3"}
            </a>
            </div>
          </li>
          <li className="item-nav-menu">
            <div className=" divlinknavbar">
            <a href="/" className="linknavbar">
            {"link4"}
            </a>
            </div>
          </li>
          <li className="item-nav-menu">
            <div className="divbutton-nav-menu">
              <span>Button </span>
            </div>
          </li>
          <li className="item-nav-menu">
            <div className="divbutton2-nav-menu">
              <img src={iconbutton} alt="Person Fill" />
              <span>Button </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;