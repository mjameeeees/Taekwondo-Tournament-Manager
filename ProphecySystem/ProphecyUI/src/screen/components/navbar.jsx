import React from "react";
import Homepage from "../pages/homepage";
import { createRoot } from "react-dom/client";
import Tournament from "../pages/tournament";
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="p-5 flex justify-center align-middle w-90">
      <Link to="/">
          <img src="/res/Logo.png" alt="logo" width="150" height="20" />
      </Link>
    </nav>
    </>
    
  );
}

export default Navbar;
