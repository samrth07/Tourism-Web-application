import React from "react";
import SidebarMenu from "./SidebarMenu"; // Adjust if path differs

const SettingsPageWrapper = ({ children }) => {
  return (
    <div className="flex">
      <SidebarMenu />
      <main className="ml-56 w-full min-h-screen bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
};

export default SettingsPageWrapper;
