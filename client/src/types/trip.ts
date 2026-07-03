export interface DayPlan {
  day: number;
  activities: string[];
}

export interface Trip {
  destination: string;
  estimatedCost: number;
  itinerary: DayPlan[];
}

export interface GenerateTripRequest {
  budget: number;
  duration: number;
  sourceCity: string;
  destinationCity?: string;
  interests: string[];
  aiDestination: boolean;
}

export interface TripResponse {
  id: string;
  sourceCity: string;
  destination: string;
  budget: number;
  duration: number;
  itinerary: DayPlan[];
  createdAt: string;
  updatedAt: string;
}