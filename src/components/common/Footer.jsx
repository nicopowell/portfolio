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
                    <a href={"https://github.com/nicopowell"} target="blank" className="d-flex align-items-center">
                        <img src={Github} className="mediaLogoFooter" alt="logoFooter"></img>
                    </a>
                    <a href={"https://www.linkedin.com/in/nicolas-powell-938a47249/"} target="blank" className="d-flex align-items-center">
                        <img src={Linkedin} className="mediaLogoFooter" alt="logoFooter"></img>
                    </a>
                    <a href={"https://www.instagram.com/nicopowell30/"} target="blank" className="d-flex align-items-center">
                        <img src={Instagram} className="mediaLogoFooter" alt="logoFooter"></img>
                    </a>
                </aside>
            </section>
            <hr className="text-white" />
            <section className="text-light text-center">
                <p>&copy; Todos los derechos reservados</p>
            </section>
        </footer>
    );
};

export default Footer;
