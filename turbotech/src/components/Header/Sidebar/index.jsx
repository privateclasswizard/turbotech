import React from "react";
import { Container, Content } from "./styles";
import { FaUserAlt } from "react-icons/fa";
import bntmenuactive from "../../../assets/icon/bnt-menu-active.svg"

import SidebarItem from "../SidebarItem";
import SidebarButton1 from "../Sidebarbutton1";
import SidebarButton2 from "../Sidebarbutton2";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <img src={bntmenuactive} onClick={closeSidebar} />
      <Content>
        <SidebarItem Text="link1" />
        <SidebarItem Text="link2" />
        <SidebarItem Text="link3" />
        <SidebarItem Text="link4" />
        <SidebarButton1 Text="Button" />
        <SidebarButton2 Icon={FaUserAlt} Text="Button" />
      </Content>
    </Container>
  );
};

export default Sidebar;
