import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Header from "./components/common/Header";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import { Container } from "react-bootstrap";

function App() {
    return (
        <>
            <Header></Header>
            <Container className="mainSection">
                <Home></Home>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default App;
