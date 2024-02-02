import "./Projects.css";
import RollingBites from "../assets/rolling-bites.avif";

import htmlIcon from "../assets/HTML.avif";
import cssIcon from "../assets/CSS.avif";
import jsIcon from "../assets/JS.avif";
import reactIcon from "../assets/React.avif";
import mongoIcon from "../assets/MongoDB.avif";
import expressIcon from "../assets/ExpressJS.avif";
import nodeIcon from "../assets/NodeJS.avif";
import gitIcon from "../assets/Git.avif";

const Projects = () => {
  return (
    <section
      id="projects"
      className="d-flex flex-column text-center py-5 container"
    >
      <h2 className="title fs-1 ">Projects</h2>
      <p className="lead mt-4 mb-5">Here you will find some of my projects</p>
      <div className="d-flex text-start">
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-5">
              <a href="https://rolling-bites.netlify.app/" target="blank">
                <img
                  src={RollingBites}
                  className="img-fluid rounded-start projectImage"
                  alt="Rolling Bites Screenshot"
                />
              </a>
            </div>
            <div className="col-md-7 container">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <h5 className="title">RollingBites</h5>
                  <p className="card-text">
                    Rolling Bites is a website which allows a restaurant to
                    create, edit and delete their products, and the customer to
                    register, add them to the cart and place their orders
                  </p>
                </div>
                <div className="py-3 d-flex gap-3 flex-wrap">
                  <img
                    src={htmlIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img src={cssIcon} alt="CSS Icon" className="projectIcons" />
                  <img src={jsIcon} alt="HTML Icon" className="projectIcons" />
                  <img
                    src={reactIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img
                    src={mongoIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img
                    src={expressIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img
                    src={nodeIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img src={gitIcon} alt="HTML Icon" className="projectIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
