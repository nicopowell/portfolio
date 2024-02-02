import "./Home.css"
import Nico from "../assets/Nico-Powell.avif"

const Home = () => {
    return (
        <section className="d-flex justify-content-center py-5">
            <img src={Nico} alt="Nico Powell" id="nicoImage"/>
        </section>
    );
};

export default Home;