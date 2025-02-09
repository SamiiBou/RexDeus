import React from "react";

function Plugin() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#3b3b3b",
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.05)", 
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)", 
  };

  const headingStyle = {
    marginBottom: "1.5rem",
    color: "#f0f0f0",
    fontSize: "2rem",
    fontWeight: "600",
    letterSpacing: "1px",
  };

  const paragraphStyle = {
    marginBottom: "2rem",
    color: "#dcdcdc",
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "0.8rem 2rem",
    backgroundColor: "transparent",
    color: "#f0f0f0",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: "500",
    border: "2px solid #f0f0f0",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#f0f0f0",
    color: "#3b3b3b",
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
            Object.assign(e.currentTarget.style, buttonHoverStyle)
          }
          onMouseOut={(e) =>
            Object.assign(e.currentTarget.style, buttonStyle)
          }
        >
          Download Here
        </a>
      </div>
    </div>
  );
}

export default Plugin;
