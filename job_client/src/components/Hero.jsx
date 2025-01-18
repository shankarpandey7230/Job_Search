import { Button } from '@/components/ui/Button';
import { Search} from "lucide-react";
const Hero = () => {

  return (
    <div className="text-center ">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font font-medium">
          You can begin the Job Hunt here!!!!
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          <span className="text-[#6a38c2]">Dream Jobs</span>
        </h1>
        <p>There are numerous challenges to get your dream job first and then get hired !!! Continue Digging</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input type="text" placeholder="Type your dream job" className="outline-none border-none w-full" />
            <Button  className="rounded-r-full bg-[#6a38c2]">
                <Search className="h-5 w-5"></Search>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
