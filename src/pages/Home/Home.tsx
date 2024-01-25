import Hero from "../../sections/Hero/Hero";
import OurFunctionality from "../../sections/OurFunctionality/OurFunctionality";
import PerformanceMetrics from "../../sections/PerformanceMetrics/PerformanceMetrics";
import './Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <PerformanceMetrics />
            <OurFunctionality />
        </div>
    )
}

export default Home;