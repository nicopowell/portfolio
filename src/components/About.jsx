import "./About.css";
import htmlIcon from "../assets/HTML.avif";
import cssIcon from "../assets/CSS.avif";
import jsIcon from "../assets/JS.avif";
import reactIcon from "../assets/React.avif";
import mongoIcon from "../assets/MongoDB.avif";
import expressIcon from "../assets/ExpressJS.avif";
import nodeIcon from "../assets/NodeJS.avif";
import gitIcon from "../assets/Git.avif";

const About = () => {
    return (
        <section id="about" className=" d-flex flex-column text-center mt-5 py-5">
            <h2 className="title fs-1 ">About me</h2>
            <p className="lead mt-4">
                Here you will find more information about me, what I do, and my current skills
                mostly in terms of programming and technology
            </p>
            <div className="row mt-4 text-start">
                <aside className="col-12 col-lg-6 pe-lg-5">
                    <h3 className="title mb-3">A little bit about me</h3>
                    <p className="lead">
                        Passionate full-stack developer specialized in crafting efficient and
                        visually appealing web solutions.
                    </p>
                    <p className="lead mt-1">
                        Seeking challenges that fueled my continuous learning journey. Currently
                        pursuing a degree in Informatics Engineering, further deepening my knowledge
                        and expertise
                    </p>
                    <p className="lead mt-1">
                        Ready to collaborate on innovative projects! Contact me.
                    </p>
                </aside>
                <aside className="col-12 col-lg-6 ps-lg-5">
                    <h3 className="title mb-3">My Skills</h3>
                    <div className="d-flex gap-4 pb-3 flex-wrap justify-content-center justify-content-lg-start">
                        <div className="d-flex gap-4">
                            <img src={htmlIcon} alt="" className="aboutIcons" />
                            <img src={cssIcon} alt="" className="aboutIcons" />
                            <img src={jsIcon} alt="" className="aboutIcons" />
                            <img src={reactIcon} alt="" className="aboutIcons" />
                        </div>
                        <div  className="d-flex gap-4">
                            <img src={mongoIcon} alt="" className="aboutIcons" />
                            <img src={expressIcon} alt="" className="aboutIcons" />
                            <img src={nodeIcon} alt="" className="aboutIcons" />
                            <img src={gitIcon} alt="" className="aboutIcons" />
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default About;
