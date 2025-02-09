import React from "react";

function Wallets() {
  // Container style: occupies 90% of the page width and is centered
  const containerStyle = {
    width: "90%",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  };

  // Button style: consistent with the previous theme
  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    backgroundColor: "#ffffff",
    color: "#333",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1>Wallets</h1>
      <button style={buttonStyle}>Connect Wallet</button>
    </div>
  );
}

export default Wallets;
