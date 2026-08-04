import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const getEmployerJobs = () => api.get("/jobs/employer");
export const createJob = (data) => api.post("/jobs/create", data);
export const updateJobStatus = (id, data) => api.patch(`/jobs/${id}`, data);
export const deleteJobById = (id) => api.delete(`/jobs/${id}`);
export const getApplicants = () => api.get("/applicants");
export const updateApplicantStatus = (id, data) => api.patch(`/applicants/${id}`, data);
