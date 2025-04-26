import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/dbconfig.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
const app = express();
dotenv.config({});

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // is used  to parse incoming request with URL-encoded payloads. and as it is true will allow parsing of nested objects and arrays using qs library
app.use(cookieParser());

const corsOptions = {
  origin: "https://job-search-kyjr.onrender.com/",

  credentials: true,
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

// User API call
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(__dirname, "/job_client/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "job_client", "dist", "index.html"));
});

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server is listening at port ${PORT}`);
});
