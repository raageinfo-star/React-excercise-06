
import React, { useState, useEffect } from "react";

const GreetingTitle = () => {
  // Two pieces of state
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  // Update document title whenever name or greeting changes
  useEffect(() => {
    if (name === "") {
      document.title = "Welcome!";
    } else {
      document.title = `${greeting}, ${name}`;
    }
  }, [name, greeting]);

  return (
    <div className="container">
      <h1>{greeting}, {name || "Guest"}!</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      >
        <option value="Hello">Hello</option>
        <option value="Hi">Hi</option>
        <option value="Welcome">Welcome</option>
        <option value="Good Morning">Good Morning</option>
      </select>
    </div>
  );
};

export default GreetingTitle;
