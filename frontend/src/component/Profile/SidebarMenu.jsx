import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCogs, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

const SidebarMenu = () => {
  return (
    <div className="h-screen w-56 bg-slate-900 text-white p-6 fixed  left-0 shadow-2xl z-50">
      <h2 className="  text-xl font-bold mb-6">My Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/Dashboard/profile"
          className="flex items-center space-x-3 hover:bg-slate-700 px-3 py-2 rounded-lg"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
        <Link
          to="/Dashboard/currentPlan"
          className="flex items-center space-x-3 hover:bg-slate-700 px-3 py-2 rounded-lg"
        >
          <FaMapMarkedAlt />
          <span>Current Plan</span>
        </Link>
        <Link
          to="/Dashboard/userFriends"
          className="flex items-center space-x-3 hover:bg-slate-700 px-3 py-2 rounded-lg"
        >
          <FaUsers />
          <span>Friends</span>
        </Link>
        <Link
          to="/Dashboard/settings"
          className="flex items-center space-x-3 hover:bg-slate-700 px-3 py-2 rounded-lg"
        >
          <FaCogs />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default SidebarMenu;