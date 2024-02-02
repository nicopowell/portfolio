import "./Projects.css";
import RollingBites from "../assets/rolling-bites.avif";

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
              <img
                src={RollingBites}
                className="img-fluid rounded-start projectImage"
                alt="Rolling Bites Screenshot"
              />
            </div>
            <div className="col-md-7 container">
              <div className="card-body">
                <h5 className="title">RollingBites</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
