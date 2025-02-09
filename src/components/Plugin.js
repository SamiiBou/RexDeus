import React from "react";

function Plugin() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#3b3b3b", // Fond global
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "#4a4a4a", // Carte avec une teinte légèrement différente
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
    border: "1px solid #5a5a5a",
  };

  const headingStyle = {
    marginBottom: "1.5rem",
    color: "#ffffff",
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    marginBottom: "2rem",
    color: "#dddddd",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  // Utilisation d'une couleur chaude assortie (#e67e22) pour le bouton
  const buttonStyle = {
    display: "inline-block",
    padding: "0.8rem 2rem",
    backgroundColor: "#e67e22",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  // Variante un peu plus foncée pour l'effet de survol
  const buttonHoverStyle = {
    backgroundColor: "#cf711f",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Download our Unreal Engine Plugin</h1>
        <p style={paragraphStyle}>
          Enhance your game development workflow with our state-of-the-art Unreal Engine plugin.
          Click below to download and integrate it into your projects!
        </p>
        <a
          href="https://github.com/MarouaBoudoukha/RexDeus/tree/main/Unreal%20Engine%20MotherAI"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Download Here
        </a>
      </div>
    </div>
  );
}

export default Plugin;
