import React from "react";

const features = [
  {
    icon: "🍃", // We'll use emojis or you can replace with SVG later
    title: "Optimized Search",
    description:
      "We provide quality search results, reducing energy consumption by 300%"
  },
  {
    icon: "❌",
    title: "Privacy First",
    description:
      "We don't collect or store any data. We are privacy focused ai search engine."
  },
  {
    icon: "⚪⚪",
    title: "Minimal Design",
    description:
      "Our Design System is minimal to reduce the carbon footprints with user interaction."
  }
];

const Features = () => {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>
        Build sustainable system's <br /> with your search
      </h2>
      <div style={styles.featuresGrid}>
        {features.map((feat, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{feat.icon}</div>
            <h3 style={styles.title}>{feat.title}</h3>
            <p style={styles.desc}>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "4rem 2rem",
    backgroundColor: "#fef8f5",
    textAlign: "center"
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "3rem"
  },
  featuresGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap"
  },
  card: {
    maxWidth: "250px",
    padding: "1rem",
    textAlign: "center"
  },
  icon: {
    fontSize: "2rem",
    color: "#6AA77D",
    marginBottom: "1rem"
  },
  title: {
    fontWeight: "bold",
    marginBottom: "0.5rem"
  },
  desc: {
    color: "#777"
  }
};

export default Features;
