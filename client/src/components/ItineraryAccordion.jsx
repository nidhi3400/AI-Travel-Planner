import { useState } from "react";
import "../styles/ItineraryAccordion.css";

export default function ItineraryAccordion({
  itinerary,
}) {
  const [openDay, setOpenDay] =
    useState(null);

  if (!itinerary?.length) {
    return null;
  }

  return (
    <div>
      {itinerary.map((day) => (
        <div
          key={day.day}
          className="day-card"
        >
          <button
            className="day-button"
            onClick={() =>
              setOpenDay(
                openDay === day.day
                  ? null
                  : day.day
              )
            }
          >
            <span>
              Day {day.day}
            </span>

            <span>
              {openDay === day.day
                ? "▲"
                : "▼"}
            </span>
          </button>

          {openDay === day.day && (
            <div className="activities">
              {day.activities.map(
                (
                  activity,
                  index
                ) => (
                  <div
                    key={index}
                    className="activity"
                  >
                    {activity}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}