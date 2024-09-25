import React, { useState } from "react";
import Home from "../../pages/home/Home";
import "./layout.css";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Menu from "../menu/Menu";

function Layout() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <GoSidebarCollapse size={30} />
              ) : (
                <GoSidebarExpand size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default Layout;
