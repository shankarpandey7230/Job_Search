import JobCards from "./JobCards";

const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 ml-3">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A28C2]">Latest </span>Job Openings
      </h1>
      {/* we will put various job cards */}

      <div className="grid grid-cols-3 gap-4 my-5">
        {jobs.slice(0, 6).map((item, index) => (
          <JobCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
