import React from "react";
import "./about.css";
import aboutImage from "../../assets/about.png";
import aboutImage2 from "../../assets/about2.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About <span>E-learning</span></h2>
          <p className="about-subtitle">Transforming Education Through Innovation</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              We are dedicated to revolutionizing online education by providing 
              high-quality courses that empower individuals to learn, grow, and 
              excel in their desired fields. Our platform combines cutting-edge 
              technology with expert instruction to create an immersive learning 
              experience.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Instructors</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Team collaborating" />
          </div>
        </div>

        <div className="about-content reverse">
          <div className="about-text">
            <h3>Why Choose Us?</h3>
            <p>
              Our courses are designed by industry experts to ensure practical 
              application in real-world scenarios. We offer flexible learning 
              paths, interactive content, and personalized support to help you 
              achieve your goals at your own pace.
            </p>
            <ul className="features-list">
              <li>Interactive learning modules</li>
              <li>24/7 access to course materials</li>
              <li>Community support and networking</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={aboutImage2} alt="Online learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;