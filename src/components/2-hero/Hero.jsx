import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me-modified.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Full Stack Developer.</h1>

        <p className="sub-title">
          I’m Abdelrahman Ashraf, a Full Stack Developer React+PHP based in
          Alexandria City. I’have graduated from route academy with valuable
          technical and teamwork skills.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
}
