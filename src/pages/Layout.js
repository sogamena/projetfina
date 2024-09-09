import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Layout.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
