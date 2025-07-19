import React, { useState, useEffect, useRef } from 'react';
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
  X
} from 'lucide-react';

const TravelPackageCards = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedPackage, setSelectedPackage] = useState(null);
  const containerRef = useRef(null);

  const travelPackages = [
    {
      id: 1,
      destination: 'Goa, India',
      title: 'Beachside Bliss in Goa',
      price: 15999,
      originalPrice: 18999,
      currency: '₹',
      duration: '5 Days, 4 Nights',
      groupSize: '2-10 People',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop',
      rating: 4.7,
      reviews: 220,
      departure: 'Oct 1 - Mar 31',
      includes: ['Flight', 'Hotel Stay (4-star)', 'Breakfast & Dinner', 'Beach Tour'],
      highlights: ['Baga Beach', 'Nightlife', 'Fort Aguada', 'Water Sports'],
      optionalExtras: ['Scuba Diving', 'Spa Session', 'Sunset Cruise'],
      difficulty: 'Easy',
      category: 'Beach & Culture',
      discount: 16,
      featured: true
    },
    {
      id: 2,
      destination: 'Manali, Himachal Pradesh',
      title: 'Mountain Adventure in Manali',
      price: 12999,
      originalPrice: 15999,
      currency: '₹',
      duration: '6 Days, 5 Nights',
      groupSize: '4-12 People',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      rating: 4.5,
      reviews: 156,
      departure: 'Apr 1 - Jun 30',
      includes: ['Transport (Volvo)', 'Hotel Stay (3-star)', 'All Meals Included', 'Trekking Guide'],
      highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Paragliding'],
      optionalExtras: ['Bonfire Night', 'Ski Lessons'],
      difficulty: 'Moderate',
      category: 'Adventure & Mountains',
      discount: 19,
      featured: false
    }
  ];

  const infinitePackages = [...travelPackages, ...travelPackages, ...travelPackages];

  const toggleFavorite = (packageId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.has(packageId) ? newFavorites.delete(packageId) : newFavorites.add(packageId);
      return newFavorites;
    });
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Beach')) return <Waves className="w-3 h-3" />;
    if (category.includes('Adventure')) return <Mountain className="w-3 h-3" />;
    if (category.includes('Nature')) return <TreePine className="w-3 h-3" />;
    if (category.includes('Hill')) return <Mountain className="w-3 h-3" />;
    return <Sun className="w-3 h-3" />;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!isAutoPlaying || !container) return;

    const scrollStep = 0.5;
    let animationFrame;

    const scroll = () => {
      container.scrollLeft += scrollStep;

      if (container.scrollLeft >= (container.scrollWidth * 2) / 3) {
        container.scrollLeft = container.scrollWidth / 3;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoPlaying]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = container.scrollWidth / 3;
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-[#001f3f] to-[#004d40] text-white">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Plane className="w-8 h-8 text-green-400 mr-3" />
          <h2 className="text-4xl font-bold">Featured Travel Packages</h2>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore incredible Indian destinations with our curated travel packages. Discover the beauty of India!
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-4 py-2"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {infinitePackages.map((pkg, index) => (
          <div key={`${pkg.id}-${index}`} className="w-[280px] flex-shrink-0 bg-white/10 backdrop-blur-md text-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/10">
            <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-semibold truncate" title={pkg.title}>{pkg.title}</h4>
                <button onClick={() => toggleFavorite(pkg.id)} className="text-red-400 hover:text-red-500">
                  <Heart fill={favorites.has(pkg.id) ? 'red' : 'none'} className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm text-gray-300 mb-2 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {pkg.destination}
              </div>
              <div className="flex items-center justify-between mb-2 text-sm text-gray-300">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {pkg.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {pkg.groupSize}</span>
              </div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-green-400 font-semibold">{pkg.currency}{pkg.price.toLocaleString()}</span>
                <span className="line-through text-gray-400 text-xs">{pkg.currency}{pkg.originalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {pkg.rating}</span>
                <span className="flex items-center gap-1">{getCategoryIcon(pkg.category)} {pkg.category}</span>
              </div>
              <button
                onClick={() => setSelectedPackage(pkg)}
                className="mt-3 w-full text-sm text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-3 py-1 rounded-full shadow-md hover:scale-105 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedPackage(null)}>
          <div
            className="bg-[#273558] text-white p-6 rounded-xl shadow-2xl border border-white/10 w-[90%] max-w-lg relative overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setSelectedPackage(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-semibold mb-2">{selectedPackage.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{selectedPackage.destination}</p>
            <img src={selectedPackage.image} alt={selectedPackage.title} className="w-full h-48 object-cover rounded-lg mb-4" />

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div><strong>Duration:</strong> {selectedPackage.duration}</div>
              <div><strong>Group Size:</strong> {selectedPackage.groupSize}</div>
              <div><strong>Departure:</strong> {selectedPackage.departure}</div>
              <div><strong>Difficulty:</strong> {selectedPackage.difficulty}</div>
              <div><strong>Rating:</strong>  {selectedPackage.rating} ({selectedPackage.reviews} reviews)</div>
              <div><strong>Category:</strong> {selectedPackage.category}</div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Facilities Included:</h4>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {selectedPackage.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Trip Highlights:</h4>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {selectedPackage.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {selectedPackage.optionalExtras && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Optional Extras:</h4>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {selectedPackage.optionalExtras.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 text-lg font-bold text-green-400">
              {selectedPackage.currency}{selectedPackage.price.toLocaleString()}
              <span className="line-through text-sm text-gray-400 ml-2">
                {selectedPackage.currency}{selectedPackage.originalPrice.toLocaleString()}
              </span>
            </div>
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
  );
};

export default TravelPackageCards;
