import React from "react";
import { Outlet } from "react-router";
import Navbar from './../componensts/Navbar';

export default function Root(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}