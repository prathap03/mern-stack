import React, { useEffect } from "react";
import PortfolioInfoBar from "./Portfolio/PortfolioInfoBar";
import PortfolioMain from "./Portfolio/PortfolioMain";
import PortfolioNavBar from "./Portfolio/PortfolioNavBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  }, []);
  return (
    <div className="flex  justify-between flex-grow bg-[#F0F0F6]">
      <PortfolioInfoBar />
      <PortfolioMain />
      <PortfolioNavBar/>
    </div>
  );
}
