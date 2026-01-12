import React, { useState, useEffect, useRef } from "react";
import { BiOutline } from "react-icons/bi";
import { MdTextIncrease } from "react-icons/md";

const TopBar = () => {
  const [increaseSize, setIncreaseSize] = useState(false);
  const sizeRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;

    if (sizeRef.current === null) {
      const sizeChange = window.getComputedStyle(root).fontSize;
      sizeRef.current = parseFloat(sizeChange);
    }

    const actualSize = sizeRef.current;
    root.style.fontSize = increaseSize
      ? `${actualSize + 5}px`
      : `${actualSize}px`;

    return () => {
      root.style.fontSize = `${actualSize}`;
    };
  }, [increaseSize]);

  return (
    <div className="topbar">
      <div className="container-fluid d-flex align-items-center justify-content-between py-2">
        <div className="d-flex flex-wrap gap-3 align-items-center topbar-left">
          <p className="accessibility">
            <BiOutline /> Accessibility on our website
          </p>
          <button
            type="button"
            className="topbar-link btn btn-link p-0"
            onClick={() => setIncreaseSize((p) => !p)}
          >
            <MdTextIncrease />
            {increaseSize ? "Decrease text size" : "Increase text size"}
            {/* Increase text size */}
          </button>
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
