import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Welcome to my showcase of recent work, where innovation meets efficiency. 
        My expertise in web development and DevOps drives each project, 
        blending creativity with technical precision. 
        From seamless web applications to robust infrastructure solutions, m
        y work embodies a commitment to excellence. 
        Every project is crafted to deliver real-world impact, solving complex challenges with clarity and purpose.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded uniform-card">
                <div className="card-image">
                  <span className="card-notify-badge">MERN stack</span>
                  <img
                    src="https://assets.goodfirms.co/images/what-is-expense-management-software.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Expense-Management-System
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/vinaykumar9301/Project-Expanse-Management-System.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded uniform-card">
                <div className="card-image">
                  <span className="card-notify-badge">Web App</span>
                  <img
                    src="https://th.bing.com/th/id/OIP.jcvJcAkafYjstApn3NVzEAHaDl?w=370&h=169&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Farm Fresh Market</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://online-e-commerce-mbo3.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded uniform-card">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Job Portal Web</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/vinaykumar9301/job-portal-app.git">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded uniform-card">
                <div className="card-image">
                  <span className="card-notify-badge">Devops</span>
                  <img
                    src="https://th.bing.com/th/id/OIP._QyS1Q9jowRaSvQvl4MCMAHaDv?w=320&h=177&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="project4"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Amazonaws</span>
                  <span className="card-detail-badge">Docker</span>

                  <span className="card-detail-badge">Jenkins</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Automated CI/CD Pipeline for Django Web Application</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/vinaykumar9301/-CI-CD-Pipeline.git">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded uniform-card">
                <div className="card-image">
                  <span className="card-notify-badge">Devops</span>
                  <img
                    src="https://i2.wp.com/www.cloudnowtech.com/blog/wp-content/uploads/2019/10/Serverless-1140-x-760.png?w=1140&ssl=1"
                    alt="project5"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">PYTHON</span>
                  <span className="card-detail-badge">AWS</span>

                  <span className="card-detail-badge">HTTP API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Serverless Application Python for HTTP API Automation</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/vinaykumar9301/Serverless-Application.git">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card rounded uniform-card">
                <div className="card-image">
                  <span className="card-notify-badge">Devops</span>
                  <img
                    src="https://www.devopsschool.com/blog/wp-content/uploads/2021/07/terraform-architecture-components-workflow-1.jpg"
                    alt="project6"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HCL</span>
                  <span className="card-detail-badge">Docker</span>

                  <span className="card-detail-badge">Terraform</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Multi Environment Infra Deployment On Terraform</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/vinaykumar9301/Terraform-Practice.git">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;