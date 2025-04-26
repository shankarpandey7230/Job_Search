import React, { useEffect } from "react";

import ApplicantsTable from "./ApplicantsTable";
import { APPLICATION_API_END_POINT } from "../../utils/apiCall";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "../../redux/applicationSlice";
import NavBar from "../shared/NavBar";
import { toast } from "sonner";
const Applicants = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`
        );
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    };
    fetchAllApplicants();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-medium text-xl my-5">
          Applicants ({applicants?.applications.length})
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
