import SidebarMenu from "../Profile/SidebarMenu";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === "/Dashboard/profile";

  return (
    <div className="flex min-h-screen bg-gray-900">
      <SidebarMenu />
      <div
        className={`ml-56 px-6 w-full bg-gray-900 ${
          isProfilePage ? "" : "pt-28"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
