import React from "react";

const Hero = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        World’s first <span style={styles.green}>Green</span> AI
      </h2>
      <div style={styles.inputGroup}>
        <input
          type="email"
          placeholder="name@email.com"
          style={styles.input}
        />
        <button style={styles.button}>Join the waitlist</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fef8f5",
    padding: "2rem"
  },
  heading: {
    fontSize: "5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem"
  },
  green: {
    color: "#6AA77D"
  },
  inputGroup: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap"
  },
  input: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #ccc",
    minWidth: "250px"
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#6AA77D",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer"
  }
};

export default Hero;
