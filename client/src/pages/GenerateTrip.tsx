import { useState } from "react";
import TripForm from "../components/TripForm";
import TripTimeline from "../components/TripTimeline";
import type { Trip } from "../types/trip";

export default function GenerateTrip() {
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="page-header">
        <h2 className="title">Generate New Trip</h2>
      </div>

      <div className="trip-page">
        <div className="trip-form-panel">
          <TripForm loading={loading} setLoading={setLoading} onResult={setTrip} />
        </div>

        <div className="trip-result-panel">
          <TripTimeline trip={trip} />
        </div>
      </div>
    </>
  );
}