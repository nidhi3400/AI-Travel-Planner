import { useEffect, useState } from "react";
import { getTrips } from "../api/tripApi";
import ItineraryAccordion from "../components/ItineraryAccordion";
import "../styles/TripHistory.css";

export default function TripHistory() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadTrips() {
      try {
        const data = await getTrips();
        setTrips(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadTrips();
  }, []);

  return (
    <div>
      <h2 className="title">Saved Trips</h2>

      <div className="history-grid">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="history-card"
          >
            <div className="history-header">
              <h3>
                {trip.sourceCity} {"->"} {trip.destination}
              </h3>

              <span className="history-budget">
                ₹{trip.budget}
              </span>
            </div>

            <p>
              Duration:
              {" "}
              {trip.duration}
              {" "}days
            </p>

            <ItineraryAccordion
              itinerary={
                trip.itinerary
                  ?.itinerary || []
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}