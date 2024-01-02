import React from "react";
import PortfolioInfoBar from "./Portfolio/PortfolioInfoBar";
import PortfolioMain from "./Portfolio/PortfolioMain";
import PortfolioNavBar from "./Portfolio/PortfolioNavBar";

export default function Home() {
  return (
    <div className="flex  justify-between flex-grow bg-[#F0F0F6]">
      <PortfolioInfoBar />
      <PortfolioMain />
      <PortfolioNavBar/>
    </div>
  );
}
