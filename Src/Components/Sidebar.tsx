
import { useState } from "react";
import { 
  Heart, 
  History, 
  Calendar, 
  BarChart3, 
  MessageCircle, 
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
  Menu
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); 


  const menuItems = [
    { icon: Heart, label: "Dashboard", active: true },
    { icon: History, label: "History" },
    { icon: Calendar, label: "Calendar" },
    { icon: BarChart3, label: "Statistics" },
    { icon: MessageCircle, label: "Chat" },
    { icon: Settings, label: "Settings" },
    { icon: Settings, label: "Appoinments" },
    // { icon: MessageCircle, label: "Chat" },  
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        bg-white shadow-lg transition-all duration-300 relative z-50
        ${isCollapsed ? 'w-16' : 'w-64'} 
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:relative h-full lg:h-auto
      `}>
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-4 right-4 lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-100">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-bold">
                <span className="text-cyan-400">Health</span>
                <span className="text-gray-800">care.</span>
              </span>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="mt-3 sm:mt-4 lg:mt-6 px-2 lg:px-3">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveIndex(index);
            setIsMobileOpen(false); // Close mobile menu on click (optional)
          }}  
          className={`flex items-center my-1 lg:my-2 p-2 lg:p-3 rounded-lg cursor-pointer transition-colors ${
            activeIndex === index 
              ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          {!isCollapsed && <span className="ml-3 font-medium text-sm sm:text-base">{item.label}</span>}
        </div>
      ))}
    </nav>

        {/* Support Section */}
        {/* {!isCollapsed && (
          <div className="absolute bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-3 lg:p-4 text-white">
              <h4 className="font-semibold mb-2 text-sm lg:text-base">Need Help?</h4>
              <p className="text-xs lg:text-sm opacity-90 mb-3">Contact our support team</p>
              <button className="bg-white text-blue-600 px-3 py-1 rounded text-xs lg:text-sm font-medium w-full sm:w-auto">
                Support
              </button>
            </div>
          </div>
        )} */}

        {/* Collapse Toggle - Desktop Only */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow hidden lg:block"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
