<<<<<<< HEAD
import TravelPackageCards from "./TravelPackageCards"
import { Globe, Award, Headset, ArrowRight, Star } from 'lucide-react'
import img from '../assets/img7.jpg'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium animate-fade-in-up">
            ✨ Your Dream Vacation Awaits
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in-up mb-6">
            WHERE TO GO NEXT?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl animate-fade-in-up delay-200 mb-8 leading-relaxed">
            Let us help you map your perfect getaway and discover unforgettable adventures around the world!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <button className="group px-8 py-4 bg-gradient-to-r bg-green-500  hover:from-emerald-500 hover:to-green-600 text-white text-lg font-semibold rounded-2xl shadow-2xl border border-emerald-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-emerald-500/25 flex items-center gap-2">
              Explore Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
      
          </div>
          
          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90 animate-fade-in-up delay-600">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 relative bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300  ">
        {/* Background decoration */}
        <div className="absolute inset-0  bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 ">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Why Choose TravelMate?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Experience the difference with our premium travel services and expert guidance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Diverse Destinations</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Explore a wide range of destinations, from serene beaches to majestic mountains and vibrant cities.
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-emerald-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Expertly Curated</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Our packages are carefully crafted by travel experts for unforgettable experiences and memories.
              </p>
              
              <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-purple-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300">
                <Headset className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Enjoy peace of mind with our dedicated support team available around the clock for assistance.
              </p>
              
              <div className="absolute top-4 right-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
=======
"use client";

// import "../index.css";//the correct path to your index.css is
import TravelPackageCards from "./TravelPackageCards";
import { Globe, Award, Headset } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img8 from "../assets/img8.jpg";
import Img9 from "../assets/img9.jpg";
import Img10 from "../assets/img10.jpg";


const Home = () => {
  return (
    <div className="bg-white min-h-screen text-stone-900">
      {/* Hero Section */}

      <div className="relative h-screen">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="h-full w-full"
        >
          {[Img2, Img3,Img10, Img4, Img9, Img5
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
          <button className="swiper-button-prev-custom w-[52px] h-[52px] border border-white text-white rounded-full bg-transparent flex items-center justify-center text-xl hover:bg-white/10 transition">
            &lt;
          </button>
          <button className="swiper-button-next-custom w-[52px] h-[52px] border border-white text-white rounded-full bg-transparent flex items-center justify-center text-xl hover:bg-white/10 transition">
            &gt;
          </button>
        </div>
        {/* Overlay Content (no blur/glassmorphism) */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-white text-center max-w-xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white [text-shadow:_0_3px_3px_rgba(0,0,0,1.5)]">
              WHERE TO GO NEXT?
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white [text-shadow:_0_3px_3px_rgba(0,0,0,1)]">
              Let us help you map your perfect getaway and discover
              unforgettable adventures!
            </p>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-full bg-stone-950/30 backdrop-blur-md hover:bg-white/10 hover:text-white transition transform duration-300 shadow-md">
              Get Started
            </button>
>>>>>>> 4da7718905546a2c892b4a3cae311d2d12bef478
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-stone-900 mb-16">
            Why Choose TravelMate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16">
            {[
              
              {
                Icon: Globe,
                title: "Diverse Destinations",
                description:
                  "Explore a wide range of destinations, from serene beaches to majestic mountains.",
              },
              {
                Icon: Award,
                title: "Expertly Curated",
                description:
                  "Our packages are carefully crafted by travel experts for unforgettable experiences.",
              },
              {
                Icon: Headset,
                title: "24/7 Support",
                description:
                  "Enjoy peace of mind with our dedicated support team available around the clock.",
              },
            ].map(({ Icon, title, description }, i) => (
              <div
                key={i}
                className=" bg-orange-500/20 rounded-3xl p-10 shadow-[8px_8px_15px_rgba(0,0,0,0.2)] hover:shadow-[12px_12px_20px_rgba(0,0,0,0.25)] transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white drop-shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-stone-900 mb-3 text-center">
                  {title}
                </h3>
                <p className="text-stone-900 text-center text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Package Cards Section */}
<<<<<<< HEAD
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <TravelPackageCards />
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
            "TravelMate made our dream vacation a reality. The attention to detail and personalized service exceeded all our expectations!"
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white/30"></div>
            <div className="text-left">
              <div className="text-white font-semibold">Saurabh Patil</div>
              <div className="text-blue-200 text-sm">Verified Traveler</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center border-t border-gray-700 pt-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">TravelMate</h3>
              <p className="text-gray-400">Your journey begins here</p>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              &copy; {new Date().getFullYear()} TravelMate. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                About Us
              </a>
            </div>
=======
      <section className="py- bg-white">
        <TravelPackageCards />
      </section>

      {/* Footer */}
      <footer className="bg-lime-950 py-8 mt-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white text-sm">
          <p>
            &copy; {new Date().getFullYear()} TravelMate. All rights reserved.
          </p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Contact Us
            </a>
>>>>>>> 4da7718905546a2c892b4a3cae311d2d12bef478
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
