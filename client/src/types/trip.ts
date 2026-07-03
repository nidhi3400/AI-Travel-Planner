export interface TripRequest {
 aiDestination: boolean;
 budget: number;
 duration: number;
 interests: string[];
 sourceCity: string;
 destinationCity?: string;
}

export interface TripResponse {
 destination: string;
 estimatedCost: number;
 itinerary: {
   day: number;
   activities: string[];
 }[];
}