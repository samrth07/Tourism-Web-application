import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarMenu from "./component/Profile/SidebarMenu";
import Home from "./component/Home";
import FindTravelMate from "./component/FindTravelMate";
import TravelProfilePage from "./component/Profile/TravelProfilePage";
import TravelFriendsPage from "./component/FriendsPage/TravelFriendsPage";
import Settings from "./component/Profile/Settings";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  
  const withSidebar = (Component) => (
    <div className="flex">
      <SidebarMenu />
      <div className="ml-56 w-full p-6">
        <Component />
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />

        
        <Route path="/" element={withSidebar(Home)} />
        <Route path="/find-travel-mate" element={withSidebar(FindTravelMate)} />
        <Route path="/profile" element={withSidebar(TravelProfilePage)} />
        <Route path="/friends" element={withSidebar(TravelFriendsPage)} />
        <Route path="/settings" element={withSidebar(Settings)} />
      </Routes>
    </Router>
  );
}

export default App;
