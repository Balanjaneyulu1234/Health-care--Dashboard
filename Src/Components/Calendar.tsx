
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const Calendar = ({ selectedDate, onDateChange }: CalendarProps) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const appointments = {
    25: { type: "dentist", time: "09:00-11:00", doctor: "Dr. Cameron Williamson" },
    26: { type: "physiotherapy", time: "11:30-12:00", doctor: "Dr. Kami Barnes" }
  };

  return (
    <div className="bg-white rounded-xl w-full shadow-sm p-3 sm:p-4 lg:p-2 h-fit ">
      <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <div className="flex space-x-1 lg:space-x-2">
          <button className="p-1 lg:p-1.5 rounded hover:bg-gray-100">
            <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1 lg:p-1.5 rounded hover:bg-gray-100">
            <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs lg:text-sm font-medium text-gray-500 py-1 lg:py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {days.map((day, index) => (
          <div key={index} className="aspect-square flex flex-col items-center justify-center relative">
            {day && (
              <>
                <button
                  onClick={() => onDateChange(new Date(currentYear, currentMonth, day))}
                  className={`w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 rounded-lg flex items-center justify-center text-xs lg:text-sm font-medium transition-colors ${
                    day === currentDate.getDate() 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {day}
                </button>
                {appointments[day] && (
                  <div className="absolute bottom-0 w-full px-0.5">
                    <div className={`h-0.5 lg:h-1 rounded-full ${
                      appointments[day].type === 'dentist' 
                        ? 'bg-blue-400' 
                        : 'bg-green-400'
                    }`}></div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Today's appointments */}
      <div className="mt-3 sm:mt-4 lg:mt-6 space-y-2 lg:space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">Today's Schedule</h4>
          <span className="text-xs lg:text-sm text-gray-500">2 appointments</span>
        </div>
        
        <div className="flex  flex-direction-row gap-5">
          <div className="flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 bg-blue-50 rounded-lg">
            <div className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-xs lg:text-sm truncate">Dentist</p>
              <p className="text-xs text-gray-600">09:00-11:00</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 bg-green-50 rounded-lg">
            <div className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-green-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-xs lg:text-sm truncate">Physiotherapy</p>
              <p className="text-xs text-gray-600">11:30-12:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
