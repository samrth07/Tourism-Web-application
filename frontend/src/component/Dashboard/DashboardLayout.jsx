import SidebarMenu from "../Profile/SidebarMenu"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <SidebarMenu />
      <div className="ml-56 p-6 w-full bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
