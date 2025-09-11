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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
