import { useEffect, useState } from "react";
import { getTrips } from "../api/tripApi";
import ItineraryAccordion from "../components/ItineraryAccordion";
import "../styles/TripHistory.css";
import type { TripResponse } from "../types/trip";

export default function TripHistory() {
  const [trips, setTrips] = useState<TripResponse[]>([]);

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

      {trips.length ===0 ? <div className="empty-state">
      <h2>🧳 No Trips Yet</h2>

      <p>
        Generate your first AI-powered
        itinerary.
      </p>
    </div>: <div className="history-grid">
        {trips.map((trip:TripResponse) => (
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
                trip.itinerary?.itinerary || []
              }
            />
          </div>
        ))}
      </div>}
    </div>
  );
}