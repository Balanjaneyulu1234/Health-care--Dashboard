
import { Search, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

const DashboardHeader = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
    
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 lg:w-64 text-sm"
              />
            </div>

          {/* Mobile Search Toggle */}
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          </div>

          {/* Profile */}
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">Dashboard</h1>
            <p className="text-gray-500 text-xs sm:text-sm hidden sm:block">Welcome back, Dr. Smith</p>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
