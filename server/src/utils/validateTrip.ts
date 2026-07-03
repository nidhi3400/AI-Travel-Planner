export function validateTripResponse(
  response: any
) {
  if (!response.destination) {
    throw new Error(
      "Missing destination"
    );
  }

  if (!response.itinerary) {
    throw new Error(
      "Missing itinerary"
    );
  }

  return response;
}