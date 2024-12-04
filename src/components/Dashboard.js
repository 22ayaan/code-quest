import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { questions } from "../constants/questions";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen p-4 mx-auto bg-stone-800 grow">
        <div className="mx-auto w-full grow p-4 md:max-w-[888px] md:p-6 lg:max-w-screen-xl">
          <div>
            <p className="text-[20px] font-medium text-gray-300 mb-8">Problemset</p>
            <div className="grid grid-cols-3 gap-4">
              {questions.map((item) => (
                <Link to="/problems/two-sum">
                  <div
                    key={item}
                    className="relative flex items-start px-3 py-2 duration-300 rounded-lg cursor-pointer thumbnail-box-bg"
                  >
                    <img
                      src="./thumbnail.png"
                      alt="thumbnail"
                      className="rounded-[4px] h-[72px] w-[72px] mr-3.5 my-auto"
                    />
                    <div className="flex-grow py-1">
                      <div className="flex flex-col justify-center h-full">
                        <div className="flex items-start">
                          <p className="font-medium mb-1.5 text-lg line-clamp-1">
                            {item?.title}
                          </p>
                        </div>
                        <div className="px-2 py-1 mb-1 rounded-full w-max bg-stone-700 text-[13px]">
                          <span className={item?.style}>{item?.diff}</span>
                        </div>
                        <div className="line-clamp-2">
                          <p className="text-[10px] text-gray-400">{item?.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
