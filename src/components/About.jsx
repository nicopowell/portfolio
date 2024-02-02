import "./About.css";
import htmlIcon from "../assets/HTML.avif";
import cssIcon from "../assets/CSS.avif";
import jsIcon from "../assets/JS.avif";
import reactIcon from "../assets/React.avif";
import mongoIcon from "../assets/MongoDB.avif";
import expressIcon from "../assets/ExpressJS.avif";
import nodeIcon from "../assets/NodeJS.avif";
import gitIcon from "../assets/Git.avif";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const About = () => {
  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;

  return (
    <section
      id="about"
      className=" d-flex flex-column text-center mt-5 py-5 container"
    >
      <h2 className="title fs-1 ">About me</h2>
      <p className="lead mt-4 mb-5">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="row mt-5 text-start">
        <aside className="col-12 col-lg-6 pe-lg-5">
          <h3 className="title mb-4">A little bit about me</h3>
          <p className="lead">
            Passionate full-stack developer specialized in crafting efficient
            and visually appealing web solutions.
          </p>
          <p className="lead mt-1">
            Seeking challenges that fueled my continuous learning journey.
            Currently pursuing a degree in Informatics Engineering, further
            deepening my knowledge and expertise
          </p>
          <p className="lead mt-1">
            Ready to collaborate on innovative projects! Contact me.
          </p>
        </aside>
        <aside className="col-12 col-lg-6 ps-lg-5">
          <h3 className="title mb-4">My Skills</h3>
          <div className="d-flex gap-4 pb-3 flex-column justify-content-center justify-content-lg-start">
            <div className="d-flex gap-4">
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("HTML")}
              >
                <img src={htmlIcon} alt="HTML Icon" className="aboutIcons" />
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={renderTooltip("CSS")}>
                <img src={cssIcon} alt="CSS Icon" className="aboutIcons" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("JavaScript")}
              >
                <img src={jsIcon} alt="JS Icon" className="aboutIcons" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("React")}
              >
                <img src={reactIcon} alt="React Icon" className="aboutIcons" />
              </OverlayTrigger>
            </div>
            <div className="d-flex gap-4">
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("MongoDB")}
              >
                <img
                  src={mongoIcon}
                  alt="MongoDB Icon"
                  className="aboutIcons"
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("ExpressJS")}
              >
                <img
                  src={expressIcon}
                  alt="ExpressJS Icon"
                  className="aboutIcons"
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("NodeJS")}
              >
                <img src={nodeIcon} alt="NodeJS Icon" className="aboutIcons" />
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={renderTooltip("Git")}>
                <img src={gitIcon} alt="Git Icon" className="aboutIcons" />
              </OverlayTrigger>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
