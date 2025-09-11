"use client"
import RollingGallery from "./RollingGallery"; 
import { useState, useEffect, useRef } from "react"
import {
  Star,
  Calendar,
  Users,
  MapPin,
  Heart,
  Plane,
  Mountain,
  Waves,
  TreePine,
  Sun,
  X,
  CheckCircle,
  Info,
} from "lucide-react"

const TravelPackageCards = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [favorites, setFavorites] = useState(new Set())
  const [selectedPackage, setSelectedPackage] = useState(null)
  const containerRef = useRef(null)

  const travelPackages = [
    {
      id: 1,
      destination: "Goa, India",
      title: "Beachside Bliss in Goa",
      price: 15999,
      originalPrice: 18999,
      currency: "₹",
      duration: "5 Days, 4 Nights",
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop",
      rating: 4.7,
      reviews: 220,
      departure: "Oct 1 - Mar 31",
      includes: ["Flight", "Hotel Stay (4-star)", "Breakfast & Dinner", "Beach Tour"],
      highlights: ["Baga Beach", "Nightlife", "Fort Aguada", "Water Sports"],
      optionalExtras: ["Scuba Diving", "Spa Session", "Sunset Cruise"],
      difficulty: "Easy",
      category: "Beach & Culture",
      discount: 16,
      featured: true,
    },
    {
      id: 2,
      destination: "Manali, Himachal Pradesh",
      title: "Mountain Adventure in Manali",
      price: 12999,
      originalPrice: 15999,
      currency: "₹",
      duration: "6 Days, 5 Nights",
      groupSize: "4-12 People",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      rating: 4.5,
      reviews: 156,
      departure: "Apr 1 - Jun 30",
      includes: ["Transport (Volvo)", "Hotel Stay (3-star)", "All Meals Included", "Trekking Guide"],
      highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Paragliding"],
      optionalExtras: ["Bonfire Night", "Ski Lessons"],
      difficulty: "Moderate",
      category: "Adventure & Mountains",
      discount: 19,
      featured: false,
    },
    {
      id: 3,
      destination: "Kerala, India",
      title: "Backwaters & Beaches of Kerala",
      price: 18500,
      originalPrice: 21000,
      currency: "₹",
      duration: "7 Days, 6 Nights",
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1596436889106-be35e509794c?w=500&h=300&fit=crop",
      rating: 4.8,
      reviews: 190,
      departure: "Nov 1 - Feb 28",
      includes: ["Flight", "Houseboat Stay", "Ayurvedic Massage", "Local Cuisine"],
      highlights: ["Alleppey Backwaters", "Kochi Fort", "Munnar Tea Plantations"],
      optionalExtras: ["Kathakali Show", "Spice Plantation Tour"],
      difficulty: "Easy",
      category: "Nature & Culture",
      discount: 12,
      featured: true,
    },
    {
      id: 4,
      destination: "Leh-Ladakh, India",
      title: "Himalayan Expedition to Ladakh",
      price: 25000,
      originalPrice: 28000,
      currency: "₹",
      duration: "8 Days, 7 Nights",
      groupSize: "6-15 People",
      image: "https://images.unsplash.com/photo-1587333109000-012128121234?w=500&h=300&fit=crop",
      rating: 4.9,
      reviews: 110,
      departure: "May 15 - Sep 30",
      includes: ["Flight", "Guesthouse Stay", "Trekking Gear", "Local Guide"],
      highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Monastery Visits"],
      optionalExtras: ["River Rafting", "Motorbike Expedition"],
      difficulty: "Hard",
      category: "Adventure & Mountains",
      discount: 11,
      featured: false,
    },
  ]

  // Duplicate packages for infinite scroll effect
  const infinitePackages = [...travelPackages, ...travelPackages, ...travelPackages]

  const toggleFavorite = (packageId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      newFavorites.has(packageId) ? newFavorites.delete(packageId) : newFavorites.add(packageId)
      return newFavorites
    })
  }

  const getCategoryIcon = (category) => {
    if (category.includes("Beach")) return <Waves className="w-3 h-3" />
    if (category.includes("Adventure")) return <Mountain className="w-3 h-3" />
    if (category.includes("Nature")) return <TreePine className="w-3 h-3" />
    if (category.includes("Hill")) return <Mountain className="w-3 h-3" />
    return <Sun className="w-3 h-3" />
  }

  // Auto-scrolling effect
  useEffect(() => {
    const container = containerRef.current
    if (!isAutoPlaying || !container) return

    const scrollStep = 2.5 // Adjust for speed
    let animationFrame

    const scroll = () => {
      container.scrollLeft += scrollStep
      // Reset scroll position when it reaches the end of the first duplicated set
      if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
        container.scrollLeft = container.scrollWidth / 3
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [isAutoPlaying])

  // Initialize scroll position to the start of the second set of packages
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.scrollLeft = container.scrollWidth / 3
    }
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Plane className="w-8 h-8 text-orange-600 mr-3" />
          <h2 className="text-4xl font-black text-stone-900">Featured Travel Packages</h2>
        </div>
        <p className="text-xl text-stone-900 max-w-3xl mx-auto ">
          Explore incredible Indian destinations with our curated travel packages. Discover the beauty of India!
        </p>
      </div>

      <div>
        <RollingGallery packages={infinitePackages} autoplay={true} pauseOnHover={true} />
      </div>


      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-lg relative overflow-y-auto max-h-[90vh] border border-gray-700 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => setSelectedPackage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPackage.image || "/placeholder.svg"}
              alt={selectedPackage.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold text-white mb-2">{selectedPackage.title}</h3>
            <p className="text-md text-gray-300 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" /> {selectedPackage.destination}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4 text-blue-400" /> <strong>Duration:</strong> {selectedPackage.duration}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4 text-purple-400" /> <strong>Group Size:</strong> {selectedPackage.groupSize}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Plane className="w-4 h-4 text-cyan-400" /> <strong>Departure:</strong> {selectedPackage.departure}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Info className="w-4 h-4 text-yellow-400" /> <strong>Difficulty:</strong> {selectedPackage.difficulty}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400" /> <strong>Rating:</strong> {selectedPackage.rating} (
                {selectedPackage.reviews} reviews)
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                {getCategoryIcon(selectedPackage.category)} <strong>Category:</strong> {selectedPackage.category}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Facilities Included:</h4>
              <ul className="list-none space-y-1 text-sm text-gray-300">
                {selectedPackage.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Trip Highlights:</h4>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {selectedPackage.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {selectedPackage.optionalExtras && selectedPackage.optionalExtras.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Optional Extras:</h4>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {selectedPackage.optionalExtras.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 text-2xl font-bold text-green-500 flex items-baseline justify-end">
              {selectedPackage.currency}
              {selectedPackage.price.toLocaleString()}
              <span className="line-through text-sm text-gray-400 ml-3">
                {selectedPackage.currency}
                {selectedPackage.originalPrice.toLocaleString()}
              </span>
            </div>
            <button className="mt-4 w-full text-lg text-white bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg transition-colors font-semibold">
              Book Now
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default TravelPackageCards
