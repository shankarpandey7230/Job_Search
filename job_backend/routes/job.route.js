import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  JobPost,
  getAllJobsListed,
  getJobsByAdmin,
  getJobById,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/postJobs").post(isAuthenticated, JobPost);
router.route("/getJobs").get(isAuthenticated, getAllJobsListed);
router.route("/getJobsAdmin").get(isAuthenticated, getJobsByAdmin);
router.route("/getJobs/:id").get(isAuthenticated, getJobById);

export default router;
