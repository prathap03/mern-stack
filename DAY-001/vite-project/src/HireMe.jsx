import React from "react";
import { Link } from "react-router-dom";

function HireMe() {
  return (
    <div className="flex items-center justify-center flex-grow text-2xl font-bold text-white bg-black min-w-screen">
      <Link to={"/"}>
        <p className="p-2 bg-blue-700 rounded-md shadow-md hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
          Go Home
        </p>
      </Link>
    </div>
  );
}

export default HireMe;
