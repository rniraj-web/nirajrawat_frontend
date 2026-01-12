import React from "react";
import { LiaBellSolid } from "react-icons/lia";
// import { BiOutline } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import { RiUserHeartLine } from "react-icons/ri";
import { GrCircleQuestion } from "react-icons/gr";
import { GrCircleInformation } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg cust-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a
          href="#"
          className="navbar-brand d-flex align-items-center gap-2 text-white m-0"
        >
          <img
            src="/public/assets/default-logo.svg.png"
            alt="brand-logo"
            className="brand-logo"
          />
        </a>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="navbar-toggler cust-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse gap-lg-4" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center gap-lg-3 ms-lg-3 mt-3 mt-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link navbar-nav-link">
                  <RiHome2Line />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar-nav-link">
                  <RiUserHeartLine />
                  Who we are
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar-nav-link">
                  <GrCircleQuestion />
                  What we do
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar-nav-link">
                  <GrCircleInformation />
                  How to register
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar-nav-link">
                  <LiaBellSolid />
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar-nav-link">
                  <IoSearch />
                  Search
                </a>
              </li>
            </ul>

            <div className="ms-lg-auto mt-3 mt-lg-0">
              <a href="#" className="btn cta w-100 w-lg-auto">
                <LuUserRound />
                Sign up / Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
