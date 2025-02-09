import React from "react";
import pirateGirl from "./pirate_girl.png"; // Make sure the path is correct

// Example data for AI agents with an "available" flag.
// Only the "Pirate Girl" agent is available (displays an image); others display a button.
const agentsData = [
  {
    id: 1,
    name: "Pirate Girl",
    image: pirateGirl,
    available: true,
  },
  {
    id: 2,
    name: "Agent Beta",
    available: false,
  },
  {
    id: 3,
    name: "Agent Gamma",
    available: false,
  },
  {
    id: 4,
    name: "Agent Delta",
    available: false,
  },
  {
    id: 5,
    name: "Agent Epsilon",
    available: false,
  },
  {
    id: 6,
    name: "Agent Zeta",
    available: false,
  },
  {
    id: 7,
    name: "Agent Eta",
    available: false,
  },
  {
    id: 8,
    name: "Agent Theta",
    available: false,
  },
  {
    id: 9,
    name: "Agent Iota",
    available: false,
  },
];

function AIAgents() {
  // Container style: occupies 90% of the page width and is centered
  const containerStyle = {
    width: "90%",
    margin: "0 auto",
    padding: "20px",
  };

  // Grid style: displays 3 cards per row with consistent spacing
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  };

  // Card style: fixed dimensions for uniformity (height and width) across all cards
  const cardStyle = {
    backgroundColor: "#f9f9f9", // Light gray background for the card
    borderRadius: "8px",
    overflow: "hidden", // Ensures the rounded corners are maintained
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "200px", // Fixed height for all cards
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Image style: makes the image fill the card while preserving its aspect ratio
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  // Minimalistic button style for adding an agent,
  // with a different background color than the card for subtle contrast.
  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    backgroundColor: "#ffffff", // White background for contrast
    color: "#333",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  };

  // Style for the agent name displayed outside the card
  const nameStyle = {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>AI Agents Catalog</h1>
      <div style={gridStyle}>
        {agentsData.map((agent) => (
          <div key={agent.id} style={{ textAlign: "center" }}>
            <div style={cardStyle}>
              {agent.available ? (
                <img src={agent.image} alt={agent.name} style={imageStyle} />
              ) : (
                <button
                  style={buttonStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "#999";
                    e.currentTarget.style.color = "#555";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "#ccc";
                    e.currentTarget.style.color = "#333";
                  }}
                >
                  Add your Agent ...
                </button>
              )}
            </div>
            <div style={nameStyle}>{agent.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIAgents;
