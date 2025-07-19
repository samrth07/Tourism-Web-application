import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, DollarSign, Package, Star, Search, ChevronDown, Plane, Building, Utensils, Camera, ShoppingBag, Car } from 'lucide-react';

const Destination= () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedState, setSelectedState] = useState('All States');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [accommodation, setAccommodation] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [budget, setBudget] = useState({
    total: '',
    flights: '',
    accommodation: '',
    food: '',
    activities: '',
    shopping: '',
    other: ''
  });
  const [packingItems, setPackingItems] = useState({});

  const destinations = [
    {
      id: 1,
      name: 'Goa',
      category: 'Beach',
      state: 'Goa',
      rating: 4.8,
      description: 'Tropical beaches with Portuguese architecture and vibrant nightlife',
      price: 8000,
      days: 7,
      tags: ['Beaches', 'Nightlife', 'Culture'],
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      category: 'Nature',
      state: 'Kerala',
      rating: 4.9,
      description: 'Serene backwaters with houseboats and lush greenery',
      price: 12000,
      days: 5,
      tags: ['Nature', 'Houseboats', 'Ayurveda'],
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      name: 'Rajasthan Heritage',
      category: 'Culture',
      state: 'Rajasthan',
      rating: 4.7,
      description: 'Majestic palaces, forts and desert landscapes',
      price: 15000,
      days: 8,
      tags: ['Palaces', 'Desert', 'Heritage'],
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      name: 'Himachal Mountains',
      category: 'Mountain',
      state: 'Himachal Pradesh',
      rating: 4.6,
      description: 'Snow-capped mountains with adventure activities',
      price: 10000,
      days: 6,
      tags: ['Mountains', 'Adventure', 'Trekking'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      name: 'Leh Ladakh',
      category: 'Adventure',
      state: 'Ladakh',
      rating: 4.8,
      description: 'High altitude desert with Buddhist monasteries',
      price: 18000,
      days: 9,
      tags: ['Adventure', 'Monasteries', 'Desert'],
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      name: 'Andaman Islands',
      category: 'Beach',
      state: 'Andaman & Nicobar',
      rating: 4.9,
      description: 'Crystal clear waters and pristine white sand beaches',
      price: 20000,
      days: 7,
      tags: ['Beaches', 'Diving', 'Islands'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop'
    },
    {
      id: 7,
      name: 'Golden Triangle',
      category: 'Culture',
      state: 'Delhi-Agra-Jaipur',
      rating: 4.5,
      description: 'Delhi, Agra, and Jaipur - India\'s cultural triangle',
      price: 14000,
      days: 6,
      tags: ['Monuments', 'Culture', 'History'],
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop'
    },
    {
      id: 8,
      name: 'Kashmir Valley',
      category: 'Nature',
      state: 'Jammu & Kashmir',
      rating: 4.7,
      description: 'Paradise on earth with Dal Lake and houseboats',
      price: 16000,
      days: 7,
      tags: ['Lakes', 'Houseboats', 'Gardens'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'
    },
    {
      id: 9,
      name: 'Tamil Nadu Temples',
      category: 'Culture',
      state: 'Tamil Nadu',
      rating: 4.4,
      description: 'Ancient temples and rich South Indian culture',
      price: 11000,
      days: 8,
      tags: ['Temples', 'Culture', 'Architecture'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop'
    }
  ];

  const categories = ['All Categories', 'Beach', 'Culture', 'Mountain', 'Adventure', 'Nature'];
  const states = ['All States', 'Goa', 'Kerala', 'Rajasthan', 'Himachal Pradesh', 'Ladakh', 'Andaman & Nicobar', 'Delhi-Agra-Jaipur', 'Jammu & Kashmir', 'Tamil Nadu'];
  const activities = ['Sightseeing', 'Adventure', 'Relaxation', 'Culture', 'Food Tours', 'Shopping', 'Nightlife', 'Nature'];
  const accommodationTypes = ['Hotel', 'Resort', 'Apartment', 'Villa', 'Hostel', 'Boutique Hotel'];

  const packingCategories = {
    'Clothing': ['T-shirts', 'Pants', 'Underwear', 'Socks', 'Jacket', 'Swimwear', 'Dress', 'Shoes'],
    'Electronics': ['Phone', 'Charger', 'Camera', 'Power-bank', 'Headphones', 'Adapter', 'Laptop', 'Tablet'],
    'Toiletries': ['Toothbrush', 'Toothpaste', 'Shampoo', 'Soap', 'Deodorant', 'Medications', 'Sunscreen', 'Moisturizer'],
    'Documents': ['Passport', 'Tickets', 'Insurance', 'ID', 'Visa', 'Hotel Booking', 'Emergency Contacts'],
    'Accessories': ['Sunglasses', 'Hat', 'Watch', 'Backpack', 'Umbrella', 'Money Belt', 'Travel Pillow']
  };

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || dest.category === selectedCategory;
    const matchesState = selectedState === 'All States' || dest.state === selectedState;
    
    return matchesSearch && matchesCategory && matchesState;
  });

  const handleActivityToggle = (activity) => {
    setSelectedActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  const handleBudgetChange = (field, value) => {
    setBudget(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const togglePackingItem = (category, item) => {
    const key = `${category}-${item}`;
    setPackingItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getPackedItemsCount = () => {
    return Object.values(packingItems).filter(Boolean).length;
  };

  const getTotalPackingItems = () => {
    return Object.values(packingCategories).flat().length;
  };

  const nextTab = () => {
    const tabs = ['explore', 'planner', 'budget', 'packing'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
    setActiveTab('planner');
  };

  const renderExplore = () => (
  <div className="space-y-6 bg-gradient-to-b from-[#0e2f2d] to-[#1a5c58] min-h-screen p-6 rounded-xl shadow-inner">
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-300" />
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white placeholder-gray-300 focus:ring-2 focus:ring-[#6dd3b4] border-none"
        />
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white border-none rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-[#6dd3b4]"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-300 pointer-events-none" />
        </div>
        <div className="relative">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="appearance-none bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white border-none rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-[#6dd3b4]"
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-300 pointer-events-none" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDestinations.map(dest => (
        <div key={dest.id} className="bg-gradient-to-br from-[#0e2f2d] to-[#1a5c58] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 overflow-hidden">
            <img 
              src={dest.image} 
              alt={dest.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop';
              }}
            />
          </div>
          <div className="p-4 text-white">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm bg-white/10 px-2 py-1 rounded">{dest.category}</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm ml-1">{dest.rating}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
            <p className="text-gray-200 mb-4">{dest.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {dest.tags.map(tag => (
                <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">₹{dest.price.toLocaleString()}</span>
                <span className="text-gray-300"> / {dest.days} days</span>
              </div>
              <button
                onClick={() => selectDestination(dest)}
                className="bg-gradient-to-r from-[#001f3f] to-[#1f4d00] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Plan Trip
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {filteredDestinations.length === 0 && (
      <div className="text-center py-12">
        <p className="text-gray-300 text-lg">No destinations found matching your criteria</p>
      </div>
    )}
  </div>
);



  const renderPlanner = () => (
  <div className="space-y-6 bg-gradient-to-b from-[#0e2f2d] to-[#1a5c58] p-6 rounded-xl shadow-inner">
    <div className="flex items-center gap-2 mb-6">
      <MapPin className="h-5 w-5 text-gray-300" />
      <h2 className="text-2xl font-bold text-white">
        {selectedDestination ? `Planning Trip to ${selectedDestination.name}` : 'Planning Trip to Bali, Indonesia'}
      </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Travel Dates</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Start date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white focus:ring-2 focus:ring-[#6dd3b4] border-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">End date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white focus:ring-2 focus:ring-[#6dd3b4] border-none"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Number of Travelers</h3>
          <select
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white focus:ring-2 focus:ring-[#6dd3b4] border-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>
                {num} Traveler{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Accommodation Preference</h3>
          <select
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white focus:ring-2 focus:ring-[#6dd3b4] border-none"
          >
            <option value="">Select accommodation</option>
            {accommodationTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Preferred Activities</h3>
          <div className="grid grid-cols-2 gap-2">
            {activities.map(activity => (
              <label key={activity} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedActivities.includes(activity)}
                  onChange={() => handleActivityToggle(activity)}
                  className="rounded border-white/20 bg-white/10 text-[#6dd3b4] focus:ring-[#6dd3b4]"
                />
                <span className="text-sm text-white">{activity}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Additional Notes</h3>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="Any special requirements or preferences..."
            rows={4}
            className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white placeholder-white/50 focus:ring-2 focus:ring-[#6dd3b4] border-none resize-none"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={nextTab}
        className="bg-gradient-to-r from-[#1a5c58] to-[#0e2f2d] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
      >
        Next: Budget Planning →
      </button>
    </div>
  </div>
);



  const renderBudget = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-2 mb-6">
      <DollarSign className="h-5 w-5 text-blue-750" />
      <h2 className="text-2xl font-bold text-to-[#1a5c58]">Budget Planning</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-from-[#488b92] mb-4">Total Budget</label>
          <input
            type="number"
            value={budget.total}
            onChange={(e) => handleBudgetChange('total', e.target.value)}
            placeholder="Enter total budget"
            className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#489b95] to-[#1a5c58] text-white placeholder-gray-300 focus:ring-2 focus:ring-[#6dd3b4] border-none"
          />
        </div>
        <div className="space-y-4">
          {['flights', 'accommodation', 'food'].map(type => (
            <div key={type} className="space-y-1">
              <label className="block text-sm font-medium text-to-[#1a5c58] capitalize">{type}</label>
              <input
                type="number"
                value={budget[type]}
                onChange={(e) => handleBudgetChange(type, e.target.value)}
                placeholder={`${type} budget`}
                className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white placeholder-gray-300 focus:ring-2 focus:ring-[#6dd3b4] border-none"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          {['activities', 'shopping', 'other'].map(type => (
            <div key={type} className="space-y-1">
              <label className="block text-sm font-medium text-white capitalize">{type}</label>
              <input
                type="number"
                value={budget[type]}
                onChange={(e) => handleBudgetChange(type, e.target.value)}
                placeholder={`${type} budget`}
                className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] text-white placeholder-gray-300 focus:ring-2 focus:ring-[#6dd3b4] border-none"
              />
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#1a5c58] to-[#0e2f2d] p-4 rounded-lg text-white">
          <h4 className="font-semibold mb-2">Budget Summary</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Total Budget:</span>
              <span>₹{budget.total || '0'}</span>
            </div>
            <div className="flex justify-between">
              <span>Allocated:</span>
              <span>
                ₹{Object.entries(budget).reduce((sum, [key, value]) => key !== 'total' ? sum + (Number(value) || 0) : sum, 0)}
              </span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-1">
              <span>Remaining:</span>
              <span>
                ₹{(Number(budget.total) || 0) - Object.entries(budget).reduce((sum, [key, value]) => key !== 'total' ? sum + (Number(value) || 0) : sum, 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={nextTab}
        className="bg-gradient-to-r from-[#1a5c58] to-[#0e2f2d] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
      >
        Next: Packing List →
      </button>
    </div>
  </div>
);
  const renderPacking = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-[#0e2f2d] to-[#1a5c58] rounded-lg p-6 text-white">
      <h3 className="text-xl font-semibold mb-4">Trip Summary</h3>
      <div className="flex gap-6">
        <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
          <MapPin className="h-8 w-8 text-white/60" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold">
            {selectedDestination ? selectedDestination.name : 'Bali, Indonesia'}
          </h4>
          <p className="text-white/80 mb-4">
            {selectedDestination ? selectedDestination.description : 'Tropical paradise with stunning beaches and rich culture'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-semibold mb-1">Travel Details</h5>
              <p>Travelers: {travelers}</p>
              <p>Accommodation: {accommodation || 'Not selected'}</p>
              <p>Activities: {selectedActivities.length > 0 ? selectedActivities.join(', ') : 'None selected'}</p>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Budget</h5>
              <p>Total: ₹{budget.total || '0'}</p>
              <p>Flights: ₹{budget.flights || '0'}</p>
              <p>Hotels: ₹{budget.accommodation || '0'}</p>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Packing Progress</h5>
              <p>{getPackedItemsCount()} items packed</p>
              <p>{getTotalPackingItems() - getPackedItemsCount()} items remaining</p>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div 
                  className="bg-[#6dd3b4] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(getPackedItemsCount() / getTotalPackingItems()) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(packingCategories).map(([category, items]) => (
        <div key={category} className="bg-gradient-to-br from-[#1a5c58] to-[#0e2f2d] text-white border border-white/10 rounded-lg p-4">
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
            {category === 'Clothing' && <Package className="h-5 w-5" />}
            {category === 'Electronics' && <Plane className="h-5 w-5" />}
            {category === 'Toiletries' && <Package className="h-5 w-5" />}
            {category === 'Documents' && <MapPin className="h-5 w-5" />}
            {category === 'Accessories' && <Package className="h-5 w-5" />}
            {category}
          </h4>
          <div className="space-y-2">
            {items.map(item => {
              const key = `${category}-${item}`;
              const isPacked = packingItems[key] || false;
              return (
                <label key={item} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPacked}
                    onChange={() => togglePackingItem(category, item)}
                    className="rounded border-white/20 bg-white/10 text-[#6dd3b4] focus:ring-[#6dd3b4]"
                  />
                  <span className={`text-sm ${isPacked ? 'line-through text-white/50' : ''}`}>
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-green-550 text-[#6dd3b4] px-4 py-2 rounded-lg">
        <Package className="h-5 w-5" />
        <span className="font-semibold">
          {getPackedItemsCount()} of {getTotalPackingItems()} items packed ({Math.round((getPackedItemsCount() / getTotalPackingItems()) * 100)}%)
        </span>
      </div>
    </div>
  </div>
);

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#001f3f] via-[#00334d] to-green-800 text-white">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#001f3f] to-[#00334d] bg-clip-text text-transparent mb-2">
          Travel Planner
        </h1>
        <p className="text-gray-300">Discover amazing destinations across India and plan your perfect trip</p>
      </header>

      <nav className="mb-8">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1 shadow-sm border border-white/20">
          {[
            { id: 'explore', label: 'Explore', icon: Search },
            { id: 'planner', label: 'Trip Planner', icon: Calendar },
            { id: 'budget', label: 'Budget', icon: DollarSign },
            { id: 'packing', label: 'Packing', icon: Package }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === id
                  ? 'bg-gradient-to-r from-[#001f3f] to-[#00334d] text-white shadow-lg'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {activeTab === 'explore' && renderExplore()}
        {activeTab === 'planner' && renderPlanner()}
        {activeTab === 'budget' && renderBudget()}
        {activeTab === 'packing' && renderPacking()}
      </main>
    </div>
  </div>
);

};

export default Destination;