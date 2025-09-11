import {  Routes, Route  , Navigate} from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar"; 
import Home from "./component/Home";
import SidebarMenu from "./component/Profile/SidebarMenu";
import FindTravelMate from "./component/FindTravelMate"; 
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Profile from "./component/Dashboard/Profile";
import Settings from "./component/Dashboard/Settings";
import Friends from "./component/Dashboard/Friends";
import CurrentPlan from "./component/Dashboard/CurrentPlan";
import DashboardLayout from "./component/Dashboard/DashboardLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessengerUI from "./component/chatInerface/ChatInterface";
import OffersPage from "./component/OfferPage";
import Experience from "./component/ExperiencePage/Experience";
import ExpBlog from "./component/ExperiencePage/ExpBlog";
import CurrentPlans from "./component/ui/TravelPlan";




function App() {

  return (
    <>

      <Navbar />
      <ToastContainer position="bottom-right" autoClose={1000} />
     <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/find-travel-mate" element={<FindTravelMate />} />
          <Route path="/chat" element={ <MessengerUI/>} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:slug" element={<ExpBlog />} />
          <Route path="/currentPlan" element={<CurrentPlans/>} />


          <Route path="/Dashboard" element={<DashboardLayout/>} >
                  <Route index element={<Navigate to="profile" />} />
                  <Route path="profile" element={<Profile/>} />
                  <Route path="currentPlan" element={<CurrentPlan/>} />
                  <Route path="userFriends" element={<Friends/>} />
                  <Route path="settings" element={<Settings/>} />
          </Route>

    </Routes>
    


    </>
    
  );
}

export default App;
 