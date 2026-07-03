import { useState } from "react";
import "../styles/ItineraryAccordion.css";
import type { DayPlan } from "../types/trip";

export default function ItineraryAccordion({
  itinerary,
}: {
  itinerary: DayPlan[];
}) {
  const [openDay, setOpenDay] =
    useState<number | null>(null);

  if (!itinerary?.length) {
    return null;
  }

  return (
    <div>
      {itinerary.map((day: DayPlan) => (
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