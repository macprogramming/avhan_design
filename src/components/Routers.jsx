import React from "react";
import { Routes, Route } from 'react-router-dom';
// import Home from "../admin/Home"
import Companyrorm from "./Companyrorm";
import Sidebar from "./Sidebar";

const Routers = () => {
  return(
    <>
      <Routes>
        <Route exact index path="/" element={<Sidebar />} />
        <Route path="/form" element={<Companyrorm />} />
      </Routes>
    </>
  )
}

export default Routers;
