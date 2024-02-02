import "./Footer.css";
import logoFooter from "../../assets/Logo Light.png";

const Footer = () => {
    return (
        <footer className="container-fluid pt-3">
            <section className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
                <aside className="ps-sm-5">
                    <a href={"/"} className="d-flex align-items-center ">
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                        <span className="fw-semibold fs-4 ms-2">Nico Powell</span>
                    </a>
                </aside>
                <aside className="pe-sm-5">
                    <a href={"/"} className="d-flex align-items-center">
                        <img src={logoFooter} id="logoFooter" alt="logoFooter"></img>
                        <span className="fw-semibold fs-4 ms-2">Nico Powell</span>
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
