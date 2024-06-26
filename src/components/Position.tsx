interface Props {
  job: any,
  isResume?: boolean
}
const Position = ({ job, isResume }:Props) => {
  return (
    <div className={`flex md:flex-row flex-col gap-5 items-start w-full p-4 ${isResume ? 'mb-5' : ''}`}>
      {
        !isResume 
      }
      <div className="flex w-full flex-col justify-center h-full">
        {
          job.startYear && job.endYear
          
        }
        <h3 className="text-2xl font-medium py-3">
          {job.title}
        </h3>
        <p className="font-normal leading-relaxed text-gray-500 text-lg">
          {job.description}
        </p>
      </div>
    </div>
  )
}

export default Position