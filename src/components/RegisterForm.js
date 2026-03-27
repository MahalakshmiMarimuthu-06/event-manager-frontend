import React, { useState } from "react";
import { registerUser } from "../services/api";

function RegisterForm({ selectedEvent, goBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!selectedEvent || !selectedEvent.id) {
      alert("Event not selected!");
      return;
    }

    if (!name || !email) {
      alert("Enter name and email!");
      return;
    }

    const data = {
      userName: name,
      email: email,
      event: {
        id: selectedEvent.id,
      },
    };

    console.log("Sending:", data);

    registerUser(data)
      .then((res) => {
        alert("Registered successfully!");
        setName("");
        setEmail("");

        // reload to update seats
        window.location.reload();
      })
      .catch((err) => {
        const msg = err.response?.data?.message;

        if (msg === "User already registered") {
          alert("You already registered!");
        } else if (msg === "Event is full") {
          alert("Event is full!");
        } else if (msg === "Event ID missing") {
          alert("Event ID missing!");
        } else {
          alert("Registration failed!");
        }

        console.error(err);
      });
  };

  return (
    <div>
      <h2>Register for {selectedEvent.name}</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {/* ✅ BACK BUTTON */}
      <button onClick={goBack} style={{ marginLeft: "10px" }}>
        Back
      </button>
    </div>
  );
}

export default RegisterForm;