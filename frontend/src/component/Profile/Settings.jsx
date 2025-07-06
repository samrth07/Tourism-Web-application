import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    picture: null,
  });

  const [preferences, setPreferences] = useState({
    travelType: "",
    destination: "",
    budget: "",
    language: "",
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFA: false,
    loginNotify: false,
  });

  const [emergency, setEmergency] = useState({
    contactName: "",
    contactNumber: "",
  });

  const handleSave = () => {
    if (security.newPassword !== security.confirmPassword) {
      alert("New password and confirmation do not match!");
      return;
    }

    console.log("Saved Settings ✅", {
      profile,
      preferences,
      security,
      emergency,
    });

    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-12 px-4 text-white">
      <div className="max-w-4xl mx-auto bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-10 border border-teal-500/30">
        <h2 className="text-4xl font-bold text-emerald-300 text-center mb-10">
          ✨ User Settings
        </h2>

        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b border-emerald-500 pb-1">
             Profile Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white/10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-white/10 p-3 rounded-md"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            
          </div>
        </div>

        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b border-cyan-500 pb-1">
            ✈️ Travel Preferences
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <select
              className="bg-white/10 p-3 rounded-md text-white"
              value={preferences.travelType}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  travelType: e.target.value,
                })
              }
            >
              <option value="">Select Type</option>
              <option value="Adventure">Adventure</option>
              <option value="Luxury">Luxury</option>
              <option value="Solo">Solo</option>
              <option value="Family">Family</option>
            </select>
            <input
              type="text"
              placeholder="Preferred Destinations"
              className="bg-white/10 p-3 rounded-md"
              value={preferences.destination}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  destination: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Budget Range"
              className="bg-white/10 p-3 rounded-md"
              value={preferences.budget}
              onChange={(e) =>
                setPreferences({ ...preferences, budget: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Language"
              className="bg-white/10 p-3 rounded-md"
              value={preferences.language}
              onChange={(e) =>
                setPreferences({ ...preferences, language: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b border-pink-500 pb-1">
            🔐 Reset Password
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="bg-white/10 p-3 rounded-md"
              value={security.currentPassword}
              onChange={(e) =>
                setSecurity({ ...security, currentPassword: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="New Password"
              className="bg-white/10 p-3 rounded-md"
              value={security.newPassword}
              onChange={(e) =>
                setSecurity({ ...security, newPassword: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="bg-white/10 p-3 rounded-md md:col-span-2"
              value={security.confirmPassword}
              onChange={(e) =>
                setSecurity({ ...security, confirmPassword: e.target.value })
              }
            />
          </div>
        </div>

        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b border-yellow-400 pb-1">
            🛡️ Security Options
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Enable Two-Factor Authentication (2FA)</span>
              <input
                type="checkbox"
                className="w-5 h-5 accent-teal-500"
                checked={security.twoFA}
                onChange={(e) =>
                  setSecurity({ ...security, twoFA: e.target.checked })
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Login Notifications</span>
              <input
                type="checkbox"
                className="w-5 h-5 accent-teal-500"
                checked={security.loginNotify}
                onChange={(e) =>
                  setSecurity({ ...security, loginNotify: e.target.checked })
                }
              />
            </div>
          </div>
        </div>

       
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b border-rose-500 pb-1">
           Emergency Contact
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Contact Name"
              className="bg-white/10 p-3 rounded-md"
              value={emergency.contactName}
              onChange={(e) =>
                setEmergency({ ...emergency, contactName: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="bg-white/10 p-3 rounded-md"
              value={emergency.contactNumber}
              onChange={(e) =>
                setEmergency({ ...emergency, contactNumber: e.target.value })
              }
            />
          </div>
        </div>

        
        <div className="text-center">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition"
          >
           Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
