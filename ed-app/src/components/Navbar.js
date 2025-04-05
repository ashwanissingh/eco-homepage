import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>
        <span style={{ color: "#6AA77D" }}>Eco</span>
        Search
      </h1>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "1rem 2rem",
    background: "#fef8f5",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0
  },
  links: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center"
  },
  link: {
    cursor: "pointer",
    color: "#333",
    textDecoration: "none",
    fontWeight: "500"
  }
};

export default Navbar;
