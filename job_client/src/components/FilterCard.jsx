import { setSearchedQuery } from "../redux/jobSlice";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const filterOptions = [
  {
    filterType: "Location",
    area: ["TAS", "NT", "SA", "ACT", "NSW", "QLD", "VIC"],
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
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterOptions.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.area.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2" key={idx}>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
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
