import TravelPackageCards from "./TravelPackageCards"
import { Globe, Award, Headset } from "lucide-react"

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
  

      {/* Hero Section */}
      <div
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
            WHERE TO GO NEXT?
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl animate-fade-in-up delay-200">
            Let us help you map your perfect getaway and discover unforgettable adventures!
          </p>
          <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-500 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
            Explore Packages
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Why Choose TravelMate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Diverse Destinations</h3>
              <p className="text-gray-300">
                Explore a wide range of destinations, from serene beaches to majestic mountains.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expertly Curated</h3>
              <p className="text-gray-300">
                Our packages are carefully crafted by travel experts for unforgettable experiences.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <Headset className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Enjoy peace of mind with our dedicated support team available around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Package Cards Section */}
      <TravelPackageCards />

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TravelMate. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
