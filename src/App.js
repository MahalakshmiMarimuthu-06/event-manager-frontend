import React, { useState } from "react";
import EventList from "./components/EventList";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <h1>Event Manager</h1>

      {!selectedEvent ? (
        <EventList onSelect={setSelectedEvent} />
      ) : (
        <RegisterForm
          selectedEvent={selectedEvent}
          goBack={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;