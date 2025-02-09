import React from "react";

function Plugin() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "1rem",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  };

  const headingStyle = {
    marginBottom: "1rem",
    color: "#333",
    fontSize: "2rem",
  };

  const paragraphStyle = {
    marginBottom: "2rem",
    color: "#666",
    fontSize: "1.1rem",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "0.8rem 2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Download our Unreal Engine Plugin</h1>
        <p style={paragraphStyle}>
          Boost your game development experience with our cutting-edge Unreal Engine plugin. Click the button below to download and start creating amazing projects!
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
