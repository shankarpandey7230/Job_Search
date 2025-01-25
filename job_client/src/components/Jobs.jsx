import FilterCard from "./FilterCard";
import Job from "./Job";
import NavBar from "./shared/NavBar";

const jobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto mt-5 sm:p-4 md:p-5  ">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {jobs.length <= 0 ? (
            <span>Jobs Not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-4">
                {jobs.map((item, index) => (
                  <div key={index}>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
