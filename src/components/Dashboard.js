import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen p-4 mx-auto bg-stone-800 grow">
        <div className="pt-4">
          <p className="text-[20px] font-medium text-gray-300 mb-8">Problemset</p>
          <div className="grid grid-cols-3 gap-4">
            <Link to="/problems/two-sum">
              <div className="relative flex items-start p-2 duration-300 bg-white rounded-lg cursor-pointer"></div>
            </Link>
            <Link to="/problems/two-sum">
              <div className="relative flex items-start p-2 duration-300 bg-white rounded-lg cursor-pointer"></div>
            </Link>
            <Link to="/problems/two-sum">
              <div className="relative flex items-start p-2 duration-300 bg-white rounded-lg cursor-pointer"></div>
            </Link>
            <Link to="/problems/two-sum">
              <div className="relative flex items-start p-2 duration-300 bg-white rounded-lg cursor-pointer"></div>
            </Link>
            <Link to="/problems/two-sum">
              <div className="relative flex items-start p-2 duration-300 bg-white rounded-lg cursor-pointer"></div>
            </Link>
            <Link to="/problems/two-sum">
              <div className="relative flex items-start p-2 duration-300 bg-white rounded-lg cursor-pointer"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
