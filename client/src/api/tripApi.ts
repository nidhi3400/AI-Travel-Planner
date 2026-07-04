import axios from "axios";
import type { GenerateTripRequest } from "../types/trip";

const API_URL = "https://ai-travel-planner-1-yrm0.onrender.com";
const API = `${API_URL}/api/trips`;

export const generateTrip = async (data : GenerateTripRequest) => {
  try{
    const res = await axios.post(`${API}/generate`, data);
    return res.data;
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 409
    ) {
      throw {
        duplicate: true,
        message:
          error.response.data.message,
      };
    }

    throw error;
  }
};

export const getTrips = async () => {
  const res = await axios.get(API);
  return res.data;
};