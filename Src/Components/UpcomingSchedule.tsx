
import { Clock, Heart, User } from "lucide-react";

const UpcomingSchedule = () => {
  const weeklySchedule = [
    {
      day: "Thursday",
      appointments: [
        { title: "Health checkup complete", time: "11:00 AM", completed: true },
        { title: "Ophthalmologist", time: "1:00 PM", completed: false }
      ]
    },
    {
      day: "Saturday",
      appointments: [
        { title: "Cardiologist", time: "12:00 AM", completed: false },
        { title: "Neurologist", time: "1:00 PM", completed: false }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 lg:p-6">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6">The Upcoming Schedule</h3>
      
      {weeklySchedule.map((daySchedule, dayIndex) => (
        <div key={dayIndex} className="mb-3 sm:mb-4 lg:mb-6">
          <h4 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">On {daySchedule.day}</h4>
          
          <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
            {daySchedule.appointments.map((appointment, index) => (
              <div key={index} className="flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                <div className={`p-1 sm:p-1.5 lg:p-2 rounded-lg ${appointment.completed ? 'bg-green-50' : 'bg-blue-50'} flex-shrink-0`}>
                  {appointment.completed ? (
                    <Heart className={`w-3 lg:w-4 h-3 lg:h-4 ${appointment.completed ? 'text-green-600' : 'text-blue-600'}`} />
                  ) : (
                    <User className="w-3 lg:w-4 h-3 lg:h-4 text-blue-600" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-xs lg:text-sm truncate">{appointment.title}</p>
                  <p className="text-xs text-gray-600 flex items-center">
                    <Clock className="w-2 lg:w-3 h-2 lg:h-3 mr-1 flex-shrink-0" />
                    {appointment.time}
                  </p>
                </div>
                
                {appointment.completed && (
                  <div className="text-green-600 flex-shrink-0">
                    <svg className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
