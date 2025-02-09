import React from "react";
import fantasyImg from "./fantasy.png";
import grokImg from "./grok.png";
import soldierImg from "./soldier.png";

// Data for the characters
const charactersData = [
  {
    id: 1,
    name: "Fantasy",
    image: fantasyImg,
    available: true,
  },
  {
    id: 2,
    name: "Grok",
    image: grokImg,
    available: true,
  },
  {
    id: 3,
    name: "Soldier",
    image: soldierImg,
    available: true,
  },
];

function CharacterCatalog() {
  // Main container style: occupies 90% of the page width and is centered
  const containerStyle = {
    width: "90%",
    margin: "0 auto",
    padding: "20px",
  };

  // Grid style: displays 3 cards per row with uniform spacing
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  };

  // Card style: fixed dimensions and a uniform design
  const cardStyle = {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    overflow: "hidden",
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

  // Style for the character name displayed below the card
  const nameStyle = {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>Character Catalog</h1>
      <div style={gridStyle}>
        {charactersData.map((character) => (
          <div key={character.id} style={{ textAlign: "center" }}>
            <div style={cardStyle}>
              {character.available ? (
                <img
                  src={character.image}
                  alt={character.name}
                  style={imageStyle}
                />
              ) : (
                // If the character is not available, display a button or a message
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Add Character...
                </button>
              )}
            </div>
            <div style={nameStyle}>{character.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterCatalog;
