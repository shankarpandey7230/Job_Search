import Job from "./Job";
import NavBar from "./shared/NavBar";

const randomJobs = [1, 2, 3, 4];
const Browse = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results({randomJobs.length})
        </h1>
        <div className=" sm:p-5 md:p-4 grid grid-cols-3 gap-4">
          {randomJobs.map((job, id) => {
            return <Job key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
