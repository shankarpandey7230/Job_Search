import Job from "./Job";
import { useSelector } from "react-redux";

// const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20 ml-3">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A28C2]">Latest </span>Job Openings
      </h1>
      {/* we will put various job cards */}

      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span className="text-center">No Jobs found</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => <Job key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
