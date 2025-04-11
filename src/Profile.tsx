import React from "react";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name">Manoj Kumar</h1>
        <p className="profile-title">Full Stack Developer</p>
        <p className="profile-location">Tamil Nadu, India • Open to work</p>
        <div className="profile-actions">
          <button className="btn connect">Connect</button>
          <button className="btn message">Message</button>
        </div>
      </div>

      <div className="profile-section">
        <h2>About</h2>
        <p>
          I'm a passionate software developer
          building scalable web applications using modern JavaScript frameworks
          like React and Node.js.
        </p>
      </div>

      <div className="profile-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p className="company">TechCorp • Jan 2022 – Present</p>
          <p>
            Leading a team of developers to build customer dashboards and
            real-time analytics tools using React and Node.js.
          </p>
        </div>
        <div className="experience-item">
          <h3>Frontend Developer</h3>
          <p className="company">Webify Inc • Jun 2020 – Dec 2021</p>
          <p>
            Built and optimized e-commerce interfaces with responsive UI and
            reusable components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
