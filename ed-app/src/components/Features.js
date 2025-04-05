import React from "react";
import "./Features.css";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="leaf-icon"
      >
        <g opacity="0.2">
          <path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" />
        </g>
        <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z" />
      </svg>
    ),
    title: "Optimized Search",
    description:
      "We provide quality search results, reducing energy consumption by 300%",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="leaf-icon"
        style={{ fill: "rgb(142, 180, 134)" }}
      >
        <g color="rgb(142, 180, 134)" weight="duotone">
          <path
            d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z"
            opacity="0.2"
          ></path>
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </g>
      </svg>
    ),
    title: "Privacy First",
    description:
      "We don't collect or store any data. We are privacy focused AI search engine.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="leaf-icon"
        style={{ fill: "rgb(142, 180, 134)" }}
      >
        <g color="rgb(142, 180, 134)" weight="duotone">
          <path
            d="M168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4A73.37,73.37,0,0,1,88,160a72,72,0,0,1,72-72,73.37,73.37,0,0,1,7.6.4A73.37,73.37,0,0,1,168,96Z"
            opacity="0.2"
          ></path>
          <path d="M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96Zm128,0a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm0,128A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z"></path>
        </g>
      </svg>
    ),
    title: "Minimal Design",
    description:
      "Our design system is minimal to reduce carbon footprint with seamless interaction.",
  },
];

const Features = () => {
  return (
    <section className="features-wrapper" id="features">
      <h2 className="features-heading">
        Build sustainable system's <br /> with your search
      </h2>
      <div className="features-grid">
        {features.map((feat, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{feat.icon}</div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
