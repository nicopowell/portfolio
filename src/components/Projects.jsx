import "./Projects.css";
import RollingBites from "../assets/rolling-bites.avif";
import Playtopia from "../assets/playtopia.avif";
import Pokedex from "../assets/pokedex.avif";
import Ganex from "../assets/ganex.avif";
import RollingBank from "../assets/rolling-bank.avif";

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
      <p className="lead mt-4 mb-5">
        Here you will find some of my personal and team projects.
      </p>
      <div className="d-flex flex-column gap-4 text-start">
        <div className="card mb-3 w-100 projectCard">
          <div className="row g-0">
            <div className="col-md-5 overflow-hidden">
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
                  <a href="https://rolling-bites.netlify.app/" target="blank">
                    <h5 className="title">Rolling Bites</h5>
                  </a>
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
                  <img src={jsIcon} alt="JS Icon" className="projectIcons" />
                  <img
                    src={reactIcon}
                    alt="React Icon"
                    className="projectIcons"
                  />
                  <img
                    src={mongoIcon}
                    alt="MongoDB Icon"
                    className="projectIcons"
                  />
                  <img
                    src={expressIcon}
                    alt="ExpressJS Icon"
                    className="projectIcons"
                  />
                  <img
                    src={nodeIcon}
                    alt="NodeJS Icon"
                    className="projectIcons"
                  />
                  <img src={gitIcon} alt="Git Icon" className="projectIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 w-100 projectCard">
          <div className="row g-0">
            <div className="col-md-5 overflow-hidden">
              <a href="https://playtopia.netlify.app/" target="blank">
                <img
                  src={Playtopia}
                  className="img-fluid rounded-start projectImage"
                  alt="Playtopia Screenshot"
                />
              </a>
            </div>
            <div className="col-md-7 container">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <a href="https://playtopia.netlify.app/" target="blank">
                    <h5 className="title">Playtopia</h5>
                  </a>
                  <p className="card-text">
                    Playtopia is a computer game e-commerce in which the
                    administrator can: create, read, edit and delete games. If
                    you log in as a guest user, you can see the games available
                    for purchase and their details.
                  </p>
                </div>
                <div className="py-3 d-flex gap-3 flex-wrap">
                  <img
                    src={htmlIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img src={cssIcon} alt="CSS Icon" className="projectIcons" />
                  <img src={jsIcon} alt="JS Icon" className="projectIcons" />
                  <img src={gitIcon} alt="Git Icon" className="projectIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 w-100 projectCard">
          <div className="row g-0">
            <div className="col-md-5 overflow-hidden">
              <a href="https://rollingcode-pokedex.netlify.app/" target="blank">
                <img
                  src={Pokedex}
                  className="img-fluid rounded-start projectImage"
                  alt="Pokedex website Screenshot"
                />
              </a>
            </div>
            <div className="col-md-7 container">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <a
                    href="https://rollingcode-pokedex.netlify.app/"
                    target="blank"
                  >
                    <h5 className="title">Pokedex</h5>
                  </a>
                  <p className="card-text">
                    This pokedex project was used to learn how to use git as a
                    version control system
                  </p>
                </div>
                <div className="py-3 d-flex gap-3 flex-wrap">
                  <img
                    src={htmlIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img src={cssIcon} alt="CSS Icon" className="projectIcons" />
                  <img src={gitIcon} alt="Git Icon" className="projectIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 w-100 projectCard">
          <div className="row g-0">
            <div className="col-md-5 overflow-hidden">
              <a href="https://ganexrollingcode.netlify.app/" target="blank">
                <img
                  src={Ganex}
                  className="img-fluid rounded-start projectImage"
                  alt="Ganex Screenshot"
                />
              </a>
            </div>
            <div className="col-md-7 container">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <a
                    href="https://ganexrollingcode.netlify.app/"
                    target="blank"
                  >
                    <h5 className="title">Ganex</h5>
                  </a>
                  <p className="card-text">
                    Ganex is the first group project which consists of a
                    streaming service for movies and series, which was made only
                    with HTML and CSS.
                  </p>
                </div>
                <div className="py-3 d-flex gap-3 flex-wrap">
                  <img
                    src={htmlIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img src={cssIcon} alt="CSS Icon" className="projectIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 w-100 projectCard">
          <div className="row g-0">
            <div className="col-md-5 overflow-hidden">
              <a
                href="https://nicopowell-rollingbank.netlify.app/"
                target="blank"
              >
                <img
                  src={RollingBank}
                  className="img-fluid rounded-start projectImage"
                  alt="Rolling Bank Screenshot"
                />
              </a>
            </div>
            <div className="col-md-7 container">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <a
                    href="https://nicopowell-rollingbank.netlify.app/"
                    target="blank"
                  >
                    <h5 className="title">Rolling Bank</h5>
                  </a>
                  <p className="card-text">
                    Rolling Bank is the website of a fictitious bank made only
                    with HTML and CSS
                  </p>
                </div>
                <div className="py-3 d-flex gap-3 flex-wrap">
                  <img
                    src={htmlIcon}
                    alt="HTML Icon"
                    className="projectIcons"
                  />
                  <img src={cssIcon} alt="CSS Icon" className="projectIcons" />
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
