
const ActivityChart = () => {
  const activityData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 80 },
    { day: 'Thu', value: 35 },
    { day: 'Fri', value: 70 },
    { day: 'Sat', value: 55 },
    { day: 'Sun', value: 90 }
  ];  

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 lg:p-6">
      <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">Activity</h3>
        <p className="text-xs lg:text-sm text-gray-500">7 appointments for this week</p>
      </div>
      
      <div className="flex justify-between h-24 sm:h-32 lg:h-48 space-x-0.5 sm:space-x-1 lg:space-x-2">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t-lg transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 min-w-[8px] sm:min-w-[12px]"
              style={{ height: `${item.value}%` }}
            ></div>
            <span className="text-xs font-medium text-gray-500 mt-1 lg:mt-2">{item.day}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 sm:mt-4 lg:mt-6 grid grid-cols-3 gap-2 lg:gap-4">
        <div className="text-center">
          <p className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">12</p>
          <p className="text-xs lg:text-sm text-gray-500">Completed</p>
        </div>
        <div className="text-center">
          <p className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">3</p>
          <p className="text-xs lg:text-sm text-gray-500">Pending</p>
        </div>
        <div className="text-center">
          <p className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">2</p>
          <p className="text-xs lg:text-sm text-gray-500">Cancelled</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
