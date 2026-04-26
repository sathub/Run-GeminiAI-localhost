import React, { useState } from "react";
import "./App.css";  // Import the stylesheet

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Something went wrong!");
    }
  };

  return (
    <div className="app-container">
      <h2 className="title">AI Query Generator</h2>
      <div className="input-section">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query..."
          className="input-box"
        />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
      <div className="response-section">
        <h3>Response:</h3>
        <div className="response-box">{response}</div>
      </div>
    </div>
  );
}

export default App;
