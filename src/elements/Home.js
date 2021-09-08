import "../styles/home.css";
import {Link} from "react-router-dom";

const Home = () => {
    const introURL = `/intro`;

    return (
        <Link to={introURL}  className="animated-word" id="start">Start</Link>
    );
};

export default Home;
