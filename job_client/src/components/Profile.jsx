import { Pen } from "lucide-react";
import NavBar from "./shared/NavBar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["html", "css", "javascript", "react", "node"];
const Profile = () => {
  const [open, setOpen] = useState(false);
  const withResume = true;
  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200  rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name:</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                assumenda exercitationem illum maxime, quas vero consequatur
                harum laboriosam quam dolorum.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>shankarpandey7230@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>0410104064</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length > 0 ? (
              skills.map((item, index) => {
                return <Badge key={index}>{item}</Badge>;
              })
            ) : (
              <span>Not applicable</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {withResume ? (
            <a
              target="blank"
              href="https://www.linkedin.com/in/shankar-pandey/"
              className="text-blue-500 w-full hover:under cursor-pointer"
            >
              Shankar Pandey
            </a>
          ) : (
            <span>N/a</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied jobs table */}
        <AppliedJobsTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
