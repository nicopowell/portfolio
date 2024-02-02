import "./Home.css";
import Nico from "../assets/Nico-Powell.avif";
import Github from "../assets/Github-Dark-Icon.avif";
import Linkedin from "../assets/Linkedin-Icon.avif";
import Instagram from "../assets/Instagram-Icon.avif";

const Home = () => {
    return (
        <section className="d-flex flex-column align-items-center py-5 my-4">
            <img src={Nico} alt="Nico Powell" id="nicoImage" />
            <h2 className="pt-4 fs-1">Hello! My name is</h2>
            <h1 id="name">Nicolas Powell</h1>
            <p className="lead mt-4" id="homeInfo">
                A Fullstack developer who builds your website from design concept to functional
                reality, driven by their knowledge and experience.
            </p>
            <div className="d-flex gap-5 mt-5">
                <a
                    href={"https://github.com/nicopowell"}
                    target="blank"
                >
                    <img src={Github} className="mediaLogoHome" alt="Github logo"></img>
                </a>
                <a
                    href={"https://www.linkedin.com/in/nicolas-powell-938a47249/"}
                    target="blank"
                >
                    <img src={Linkedin} className="mediaLogoHome" alt="Linkedin Logo"></img>
                </a>
                <a
                    href={"https://www.instagram.com/nicopowell30/"}
                    target="blank"
                >
                    <img src={Instagram} className="mediaLogoHome" alt="Instagram Logo"></img>
                </a>
            </div>
        </section>
    );
};

export default Home;
