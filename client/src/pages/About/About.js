import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="Image\Passpot_Img.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              🛠️ DevOps Excellence: I thrive on streamlining software delivery pipelines through automation and efficient workflows. Proficient in a range of DevOps tools and methodologies, I ensure seamless integration between development and operations, resulting in faster, reliable, and scalable software deployments.
              </p>
              <p>
              🌐 MERN Stack Proficiency: As a MERN Stack developer, I harness the power of MongoDB, Express.js, React, and Node.js to create robust and user-friendly web applications. My expertise in building responsive interfaces drives engaging user experiences and enhances customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;