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
          </div>
        </div>
      </div>

      {/* Travel Package Cards Section */}
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
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
