import { useState } from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import RegisterMain from "./components/RegisterMain";

export default function App() {
  return (
    <div className="min-vh-100 register-page">
      <TopBar />
      <NavBar />
      <RegisterMain />
    </div>
  );
}
