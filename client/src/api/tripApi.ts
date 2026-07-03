import axios from "axios";

const API_URL = "https://ai-travel-planner-1-yrm0.onrender.com";
const API = `${API_URL}/api/trips`;

export const generateTrip = async (data) => {
  const res = await axios.post(`${API}/generate`, data);
  return res.data;
};

export const getTrips = async () => {
  const res = await axios.get(API);
  return res.data;
};