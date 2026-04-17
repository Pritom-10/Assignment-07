import React from 'react';
import logoBig from '../assets/frame-2087325652.png'
import home from '../assets/vector (1).png'
import timelineImg from '../assets/clock.png'
import statsImg from '../assets/chartline.png'
import { Link ,NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mx-auto">
        <div className="flex-1">
          <img src={logoBig} alt="Logo" className=" " />
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `${isActive ? "bg-[#587168]" : "text-gray-500"} flex gap-1 justify-center items-center bg-[#244d3f] btn text-white`;
                }}
              >
                <img className="w-4" src={home} alt="" />
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) => {
                  return `${isActive ? "border-gray-500 border p-2 rounded-2xl" : "text-gray-500"} flex gap-1 justify-center items-center`;
                }}
              >
                <img src={timelineImg} alt="" />
                <p>Timelines</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) => {
                  return `${isActive ? "border-gray-500 border p-2 rounded-2xl" : "text-gray-500"} flex gap-1 justify-center items-center`;
                }}
              >
                <img src={statsImg} alt="" />
                <p>Stats</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;