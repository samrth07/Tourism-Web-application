import React, { useState, useEffect } from 'react';
import {
  MapPin, Calendar, Users, DollarSign, Backpack
} from 'lucide-react';

const Destination = () => {
  const [activeTab, setActiveTab] = useState('planner');
  const [preferences, setPreferences] = useState({
    budget: 'medium',
    duration: '3-5',
    travelers: 'couple'
  });
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [packingList, setPackingList] = useState([]);

  const destinations = [
    { id: 1, name: 'Manali', type: 'mountains', season: 'Oct-Mar', budget: 'medium', activities: ['trekking', 'skiing', 'camping'] },
    { id: 2, name: 'Goa', type: 'beaches', season: 'Nov-Feb', budget: 'low', activities: ['beaches', 'water sports', 'nightlife'] },
    { id: 3, name: 'Rajasthan', type: 'heritage', season: 'Nov-Mar', budget: 'high', activities: ['palaces', 'desert', 'culture'] },
    { id: 4, name: 'Kerala', type: 'nature', season: 'Sep-Mar', budget: 'medium', activities: ['backwaters', 'wildlife', 'ayurveda'] },
    { id: 5, name: 'Ladakh', type: 'adventure', season: 'Jun-Sep', budget: 'high', activities: ['trekking', 'motorcycling', 'monasteries'] }
  ];

  const generatePackingList = (destination) => {
    const baseItems = ['Clothes', 'Phone Charger', 'Toiletries', 'First Aid Kit'];
    const seasonalItems = {
      'Oct-Mar': ['Warm Clothes', 'Jacket', 'Gloves'],
      'Nov-Feb': ['Sunscreen', 'Swimwear', 'Hats'],
      'Jun-Sep': ['Raincoat', 'Waterproof Shoes', 'Umbrella']
    };
    const seasonal = seasonalItems[destination.season] || [];
    setPackingList([...baseItems, ...seasonal]);
  };

  useEffect(() => {
    if (selectedDestination) {
      generatePackingList(selectedDestination);
    }
  }, [selectedDestination]);

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition font-medium ${
        activeTab === id
          ? 'bg-gradient-to-r from-[#315477] to-[#1c594f] text-green-300 shadow'
          : 'bg-white text-gray-800 hover:bg-gray-200'
      }`}
    >
      {icon}
      {label}
    </button>
  );

  const Card = ({ children }) => (
    <div className=" bg-gradient-to-br from-green-100 via-green-200 to-green-300
 p-6 rounded-xl shadow-md">{children}</div>
  );

  const PlannerTab = () => (
    <div className="space-y-6">
      <div className="text-white p-6 rounded-xl bg-gradient-to-r from-[#001f3f] to-[#004d40] shadow">
        <h2 className="text-2xl font-bold"> Plan Your Trip</h2>
        <p className="opacity-90">Smart AI suggestions for a perfect getaway.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-green-300">
          <h3 className="text-lg font-semibold mb-4">Your Preferences</h3>
          <label className="block text-sm mb-1">Budget</label>
          <select
            value={preferences.budget}
            onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
            className="w-full mb-3 p-2 border rounded"
          >
            <option value="low">Budget (₹5k–15k)</option>
            <option value="medium">Mid (₹15k–35k)</option>
            <option value="high">Luxury (₹35k+)</option>
          </select>

          <label className="block text-sm mb-1">Duration</label>
          <select
            value={preferences.duration}
            onChange={(e) => setPreferences({ ...preferences, duration: e.target.value })}
            className="w-full mb-3 p-2 border rounded"
          >
            <option value="1-2">1–2 Days</option>
            <option value="3-5">3–5 Days</option>
            <option value="week">1 Week</option>
            <option value="2weeks">2+ Weeks</option>
          </select>

          <label className="block text-sm mb-1">Travelers</label>
          <select
            value={preferences.travelers}
            onChange={(e) => setPreferences({ ...preferences, travelers: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="solo">Solo</option>
            <option value="couple">Couple</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
          </select>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4">Suggested Destinations</h3>
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              className={`cursor-pointer p-3 border rounded-lg mb-2 hover:border-[#004d40] transition ${
                selectedDestination?.id === dest.id ? 'bg-teal-100 border-[#004d40]' : ''
              }`}
            >
              <h4 className="font-medium text-[#004d40]">{dest.name}</h4>
              <p className="text-sm text-gray-500">Season: {dest.season}</p>
              <p className="text-xs text-gray-700">{dest.activities.join(', ')}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );

  const CalendarTab = () => (
    <div className="space-y-6">
      <div className="text-white p-6 rounded-xl bg-gradient-to-r from-[#001f3f] to-[#004d40] shadow">
        <h2 className="text-2xl font-bold">📅 Seasonal Calendar</h2>
        <p className="opacity-90">Plan according to the best weather.</p>
      </div>

      <Card>
        {destinations.map((dest) => (
          <div key={dest.id} className="flex justify-between py-2 border-b">
            <span>{dest.name}</span>
            <span className="text-sm text-gray-500">{dest.season}</span>
          </div>
        ))}
      </Card>
    </div>
  );

  const BudgetTab = () => {
    const estimate = {
      low: { travel: 2000, stay: 1000, food: 1500, activities: 500 },
      medium: { travel: 4000, stay: 2000, food: 2500, activities: 1000 },
      high: { travel: 8000, stay: 4000, food: 4000, activities: 2000 }
    }[preferences.budget];

    const total = Object.values(estimate).reduce((a, b) => a + b, 0);

    return (
      <div className="space-y-6">
        <div className="text-white p-6 rounded-xl bg-gradient-to-r from-[#001f3f] to-[#004d40] shadow">
          <h2 className="text-2xl font-bold"> Budget Breakdown</h2>
          <p className="opacity-90">Your expense plan based on preferences.</p>
        </div>

        <Card>
          {Object.entries(estimate).map(([category, amount]) => (
            <div key={category} className="flex justify-between py-2 border-b">
              <span className="capitalize">{category}</span>
              <span className="text-blue-600 font-medium">₹{amount}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 font-bold text-lg text-[#004d40]">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </Card>
      </div>
    );
  };

  const PackingTab = () => (
    <div className="space-y-6">
      <div className="text-white p-6 rounded-xl bg-gradient-to-r from-[#001f3f] to-[#004d40] shadow">
        <h2 className="text-2xl font-bold">🧳 Packing Assistant</h2>
        <p className="opacity-90">Pack smarter for your destination.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Choose Destination</h3>
          {destinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              className={`w-full text-left p-3 rounded-lg border mb-2 transition ${
                selectedDestination?.id === dest.id
                  ? 'bg-green-100 border-green-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              {dest.name} <span className="text-sm text-gray-500">({dest.season})</span>
            </button>
          ))}
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4">Your Packing List</h3>
          {packingList.length ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {packingList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          ) : (
            <p className="text-gray-500 italic">Select a destination</p>
          )}
        </Card>
      </div>
    </div>
  );

  const renderTab = () => {
    switch (activeTab) {
      case 'planner': return <PlannerTab />;
      case 'calendar': return <CalendarTab />;
      case 'budget': return <BudgetTab />;
      case 'packing': return <PackingTab />;
      default: return <PlannerTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#004d40] py-10 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-2 flex-wrap mb-6">
          <TabButton id="planner" label="Planner" icon={<MapPin className="w-4 h-4" />} />
          <TabButton id="calendar" label="Calendar" icon={<Calendar className="w-4 h-4" />} />
          <TabButton id="budget" label="Budget" icon={<DollarSign className="w-4 h-4" />} />
          <TabButton id="packing" label="Packing" icon={<Backpack className="w-4 h-4" />} />
        </div>
        {renderTab()}
      </div>
    </div>
  );
};

export default Destination;
