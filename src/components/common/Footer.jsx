import "./Footer.css";
import logoFooter from "../../assets/Logo Light.png";
import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="container-fluid pt-3">
            <section className="row">
                <aside className="col-sm-6 ps-sm-5 fw-semibold fs-4">
                    <a href={"/"} className="d-flex align-items-center justify-content-center justify-content-sm-start mb-sm-0 mb-4">
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                        <span className="ms-2">Nico Powell</span>
                    </a>
                </aside>
                <aside className="col-sm-6 text-sm-end d-flex ad-flex align-items-center justify-content-center justify-content-sm-end gap-3 pe-sm-5">
                    <a href={"/"}>
                        <Linkedin size={50}></Linkedin>
                    </a>
                    <a href={"/"}>
                        <Github size={50}></Github>
                    </a>
                    <a href={"/"}>
                        <EnvelopeFill size={50}></EnvelopeFill>
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
