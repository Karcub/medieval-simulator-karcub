import "../styles/situation.css";
import {Link} from "react-router-dom";

const Intro = () => {
    const startURL = `/card/${(Math.floor(Math.random() * (28 - 1 + 1)) + 1)}`;

    return (
        <div className="container" id="cont">
            <div id="intro"><span className="initial">W</span>elcome to the middle ages! You're an average peasant with a strange hobby -
                    You lead an up-and-coming rock band in these strange times.
                <br/><br/>
                <span className="initial">Y</span>ou face difficult decisions every day
                    regarding the cornerstones of life:
                <span className="stat-name">money</span>,
                your relationship with your <span className="stat-name">king</span>,
                 also with the Holy Mother <span className="stat-name">church</span>,
                 and your physical and mental <span className="stat-name">health</span>.
                <br/><br/>
                <span className="initial">S</span>o pick your choices carefully-- if your balance is not right, you lose at life.
                <span className="intro-end">Good luck, have fun (if you can).</span>
            </div>
            <Link to={startURL} class="btn start">I'm ready</Link>`
        </div>
    );
};

export default Intro;

// ReactDOM.render(<Intro/>, document.getElementById('cont'));