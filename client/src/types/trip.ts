export interface TripRequest {
 budget: number;
 duration: number;
 interests: string[];
 sourceCity: string;
}

export interface TripResponse {
 destination: string;
 estimatedCost: number;
 itinerary: {
   day: number;
   activities: string[];
 }[];
}