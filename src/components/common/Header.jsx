import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/Logo.png";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home" className="fw-bold fs-3 d-flex align-items-center">
                    <img
                        alt=""
                        src={logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-center"
                    /><span className="ms-3">Nico Powell</span>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
