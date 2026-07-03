import ItineraryAccordion from "./ItineraryAccordion";
import "../styles/TripTimeline.css";

export default function TripTimeline({
  trip,
}) {
  if (!trip) {
    return (
      <div className="empty">
        Generate a trip to view
        itinerary
      </div>
    );
  }

  return (
    <div>
      <div className="trip-header">
        <h2>
          📍 {trip.destination}
        </h2>

        <div className="cost">
          ₹
          {trip.estimatedCost}
        </div>
      </div>

      <ItineraryAccordion
        itinerary={
          trip.itinerary
        }
      />
    </div>
  );
}