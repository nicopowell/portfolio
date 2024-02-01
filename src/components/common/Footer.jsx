import "./Footer.css";
import logoFooter from "../../assets/Logo Light.png";

const Footer = () => {
    return (
        <footer className="container-fluid pt-3">
            <section className="row">
                <aside className="col-md-6 ps-lg-5 col-xs-12 fw-bold fs-4 d-flex align-items-center">
                    <a href={"/"}>
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                        <span className="ms-2">Nico Powell</span>
                    </a>
                </aside>
                <aside className="col-md-6 text-md-end col-xs-12">
                    <a href={"/"}>
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                    </a>
                    <a href={"/"}>
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                    </a>
                    <a href={"/"}>
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
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
