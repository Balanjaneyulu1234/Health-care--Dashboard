// import { useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import DashboardHeader from '../components/DashboardHeader'
// import AnatomyViewer from '../components/AnatomyViewer'
// import HealthMetrics from '../components/HealthMetrics'
// import Calendar from '../components/Calendar'
// import UpcomingSchedule from '../components/UpcomingSchedule'
// import ActivityChart from '../components/ActivityChart'

// const Index = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date())

//   return (
//     <div className='min-h-screen bg-gray-50 flex w-full'>
//       <Sidebar />
//       <div>
//         <main className='flex flex-direction-row gap-5 p-3'>
//           <div>
//             <DashboardHeader />
//             <AnatomyViewer />
//           </div>
//           <div>
//             <Calendar
//               selectedDate={selectedDate}
//               onDateChange={setSelectedDate}
//             />
//             <div>
//               <UpcomingSchedule />
//               <ActivityChart />
//             </div>

//             {/* <HealthMetrics /> */}
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Index

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import AnatomyViewer from '../components/AnatomyViewer'
import HealthMetrics from '../components/HealthMetrics'
import Calendar from '../components/Calendar'
import UpcomingSchedule from '../components/UpcomingSchedule'
import ActivityChart from '../components/ActivityChart'

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      <Sidebar />
      <div className='flex-1 p-8'>
        {/* <DashboardHeader /> */}

        <div className='grid grid-cols-3 gap-8 '>
          {/* Left Column */}
          {/* <div className='col-span-2 space-y-8 flex gap-8'> */}
          <div className='col-span-2'>
            <DashboardHeader />
            <div className='flex flex-direction-row gap-8'>
              <AnatomyViewer />
              <HealthMetrics />
            </div>
            <ActivityChart />
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            <div className='bg-white p-6 rounded-xl'>
              <h2 className='text-xl font-semibold mb-4'>October 2021</h2>
              <Calendar
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </div>

            <div className='bg-white p-6 rounded-xl'>
              <h2 className='text-xl font-semibold mb-4'>Upcoming Schedule</h2>
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
