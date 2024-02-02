import "./Footer.css";
import logoFooter from "../../assets/Logo Light.png";
import Github from "../../assets/Github-Icon.avif";
import Linkedin from "../../assets/Linkedin-Icon.avif";
import Instagram from "../../assets/Instagram-Icon.avif";

const Footer = () => {
    return (
        <footer className="container-fluid pt-3">
            <section className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
                <aside className="ps-sm-5 mb-4 mb-sm-0">
                    <a href={"/"} className="d-flex align-items-center ">
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                        <span className="fw-semibold fs-4 ms-2">Nico Powell</span>
                    </a>
                </aside>
                <aside className="pe-sm-5 d-flex gap-3">
                    <a href={"https://github.com/nicopowell"} target="blank">
                        <img src={Github} className="mediaLogoFooter" alt="Github logo"></img>
                    </a>
                    <a href={"https://www.linkedin.com/in/nicolas-powell-938a47249/"} target="blank">
                        <img src={Linkedin} className="mediaLogoFooter" alt="Linkedin Logo"></img>
                    </a>
                    <a href={"https://www.instagram.com/nicopowell30/"} target="blank">
                        <img src={Instagram} className="mediaLogoFooter" alt="Instagram Logo"></img>
                    </a>
                </aside>
            </section>
            <hr className="text-white" />
            <section className="text-light text-center">
                <p>© Copyright 2024 - Made by Nicolas Powell</p>
            </section>
        </footer>
    );
};

export default Footer;
