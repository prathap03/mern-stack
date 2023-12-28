import React from 'react'
import PortfolioInfoBar from './Portfolio/PortfolioInfoBar'
import PortfolioMain from './Portfolio/PortfolioMain'

export default function Home() {
  return (
    <div className="flex justify-between min-h-screen bg-[#F0F0F6]">
     <PortfolioInfoBar/>
      <PortfolioMain/>
      <div className="flex content-end  min-w-[5%] bg-white">Nav Component</div>
    </div>
  )
}
