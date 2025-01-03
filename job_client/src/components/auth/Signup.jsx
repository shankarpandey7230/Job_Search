import React from 'react';
import NavBar from '../shared/NavBar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/Button';

const Signup = () => {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center max-w-7xl mx-auto bg-gray">
        <form action="" className="w-1/2 border rounded-md p-6 my-10">
          <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>

          <div className="my-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input type="text" placeholder="Shankar Pandey" />
          </div>
          <div className="my-2">
            <Label htmlFor="emil">Email</Label>
            <Input type="email" placeholder="Shankar@Pandey.com" />
          </div>
          <div className="my-2">
            <Label htmlFor="Phone">Phone:</Label>
            <Input type="text" placeholder="012404244" />
          </div>
          <div className="my-2">
            <Label htmlFor="password">Full Name</Label>
            <Input type="password" placeholder="Enter your Password" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
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
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
