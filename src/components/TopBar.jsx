import React from "react";
import { BiOutline } from "react-icons/bi";
import { MdTextIncrease } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-fluid d-flex align-items-center justify-content-between py-2">
        <div className="d-flex flex-wrap gap-3 align-items-center topbar-left">
          <p className="accessibility">
            <BiOutline /> Accessibility on our website
          </p>
          <a href="" className="topbar-link">
            <MdTextIncrease />
            Increase text size
          </a>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-sm lang-pill active" type="button">
            English
          </button>
          <button className="btn btn-sm lang-pill" type="button">
            Cymraeg
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
