import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Header from "./components/common/Header";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import { Container } from "react-bootstrap";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header></Header>
      <Container fluid className="mainSection">
        <Home></Home>
        <hr />
        <About></About>
        <hr />
        <Projects></Projects>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
