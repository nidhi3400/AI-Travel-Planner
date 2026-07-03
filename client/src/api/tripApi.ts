import axios from "axios";

const API = "http://localhost:3001/api/trips";

export const generateTrip = async (data) => {
  const res = await axios.post(`${API}/generate`, data);
  return res.data;
};

export const getTrips = async () => {
  const res = await axios.get(API);
  return res.data;
};