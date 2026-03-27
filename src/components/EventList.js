import React, { useEffect, useState } from "react";
import { getEvents } from "../services/api";

function EventList({ onSelect }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    getEvents()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  };

  return (
    <div>
      <h2>Events</h2>

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <p>Seats: {event.seats}</p>

          {/* ✅ ONLY ONE BUTTON */}
          <button
            disabled={event.seats === 0}
            onClick={() => onSelect(event)}
          >
            {event.seats === 0 ? "Full" : "Register"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default EventList;