
import { Heart, Smile, Bone } from "lucide-react";

const HealthMetrics = () => {
  const metrics = [
    {
      icon: Heart,
      title: "Lungs",
      value: "98%",
      status: "Excellent",
      color: "bg-red-100 text-red-600",
      bgColor: "bg-red-50",
      progress: 98
    },
    {
      icon: Smile,
      title: "Teeth",
      value: "85%",
      status: "Good",
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50",
      progress: 85
    },
    {
      icon: Bone,
      title: "Bone",
      value: "92%",
      status: "Very Good",
      color: "bg-orange-100 text-orange-600",
      bgColor: "bg-orange-50",
      progress: 92
    }
  ];

  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {metrics.map((metric, index) => (
        <div style={{width:"350px", marginTop:"20px"}} key={index} className={`${metric.bgColor} rounded-xl p-2.5 sm:p-3 lg:p-4`}>
          <div className="flex items-center w-500px justify-between mb-2 lg:mb-3">
            <div className="flex items-center space-x-2 lg:space-x-3 min-w-0 flex-1">
              <div className={`p-1 sm:p-1.5 lg:p-2 rounded-lg ${metric.color} flex-shrink-0`}>
                <metric.icon className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base truncate">{metric.title}</h4>
                <p className="text-xs lg:text-sm text-gray-600">{metric.status}</p>
              </div>
            </div>
            <span className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 flex-shrink-0">{metric.value}</span>
          </div>
          
          <div className="w-full bg-white bg-opacity-60 rounded-full h-1 sm:h-1.5 lg:h-2">
            <div
              className={`h-1 sm:h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
                metric.title === 'Lungs' ? 'bg-red-400' :
                metric.title === 'Teeth' ? 'bg-blue-400' : 'bg-orange-400'
              }`}
              style={{ width: `${metric.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;
