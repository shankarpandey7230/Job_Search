import { useState } from "react";
import NavBar from "../shared/NavBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";
const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.File) {
      navigate();
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center max-w-7xl mx-auto bg-gray">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border rounded-md p-6 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>

          <div className="my-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              type="text"
              placeholder="Shankar Pandey"
              value={input.fullname || ""}
              name="fullname"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="emil">Email</Label>
            <Input
              type="email"
              placeholder="Shankar@Pandey.com"
              value={input.email || ""}
              name="email"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="Phone">Phone:</Label>
            <Input
              type="text"
              placeholder="012404244"
              value={input.phoneNumber || ""}
              name="phoneNumber"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter your Password"
              value={input.password || ""}
              name="password"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center  space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {loading ? (
            <Button className="w-full y-4">
              <Loader2 className="mr-2 animate-spin w-4 h-4" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Sign Up
            </Button>
          )}
          <span>
            Already have an account?
            <Link to="/login" className="text-blue-600 ">
              Login!
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
