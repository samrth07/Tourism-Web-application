import React from 'react';
import TravelPackageCards from './TravelPackageCards';


const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* <Navbar /> */}
      
      <div className="text-white text-center pt-32 bg-black/50 h-full">
        <h1 className="text-5xl font-bold">WHERE TO GO NEXT ? </h1>
        <p className="mt-4 text-xl">Let us help you map your perfect getaway!</p>
      </div>
      <TravelPackageCards/>
      </div>
  );
};

export default Home;
