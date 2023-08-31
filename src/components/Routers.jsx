import React from "react";
import { Routes, Route } from 'react-router-dom';
// import Home from "../admin/Home"
import Companyrorm from "./Companyrorm";
import Sidebar from "./Sidebar";

const Routers = () => {
  return(
    <>
      <Routes>
        <Route exact index path="/" element={<Companyrorm />} />
        <Route path="/dashboard" element={<Sidebar />} />
      </Routes>
    </>
  )
}

export default Routers;
