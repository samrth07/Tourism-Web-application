import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCogs, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import { LogOut, Plane } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const { logout } = useAuth();
  const navigate = useNavigate()
  return (
    <div className="h-screen w-56 mt-3 bg-slate-900 text-white p-6 fixed left-0 shadow-2xl z-50">
      
      <Link
        to="/"
        className="flex items-center gap-2 text-white text-2xl font-bold mb-8 transition-colors hover:text-green-400"
      >
        <Plane className="w-7 h-7 text-green-500" />
        <span>TravelMate</span>
      </Link>

      {/* <h2 className="text-xl font-semibold mb-6">My Dashboard</h2> */}

      <nav className="flex mt-4 text-lg flex-col space-y-4">
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
        <Link
          to="/"
          className="flex items-center space-x-3 hover:bg-slate-700 px-3 py-2 rounded-lg"
           onClick={ logout }
        >
          <LogOut />
          <div >Logout</div>
        </Link>
      </nav>
    </div>
  );
};

export default SidebarMenu;
