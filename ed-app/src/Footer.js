import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.logo}>EcoSearch</div>
        <div style={styles.copy}>© 2025 EcoSearch</div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#89B484", // green shade
    padding: "2rem",
    color: "#fff",
    textAlign: "left"
  },
  inner: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginBottom: "1rem"
  },
  copy: {
    fontSize: "0.9rem"
  }
};

export default Footer;
