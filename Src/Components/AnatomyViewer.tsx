import Bodyimage from '../images/body.png'
import HealthMetrics from './HealthMetrics'

const AnatomyViewer = () => {
  return (
    <div className='bg-white rounded-xl shadow-sm p-3 sm:p-4 lg:p-6'>
      <div className='flex justify-between items-center mb-3 sm:mb-4'>
        <h3 className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900'>
          Body Analysis
        </h3>
        <button className='text-blue-600 text-xs lg:text-sm font-medium hover:underline'>
          Details →
        </button>
      </div>
      <div className='flex items-center gap-5'>
        <img src={Bodyimage} />
          {/* <HealthMetrics /> */}
      </div>
    </div>
  )
}

export default AnatomyViewer
