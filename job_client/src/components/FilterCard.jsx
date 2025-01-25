import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterOptions = [
  {
    filterType: "Location",
    area: ["Tas", "NT", "SA", "ACT", "NSW", "QLD", "VIC"],
  },
  {
    filterType: "Industry",
    area: ["FrontEnd Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    area: ["40K-60K", "65K- 80K", "85K-120K"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterOptions.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.area.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2" key={index}>
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
