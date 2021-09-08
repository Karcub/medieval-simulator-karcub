import "../styles/situation.css";
import Endings from "../Endings";
import {CharCard} from "../styles/CharCard";
import UserInfo from "../globals/UserInfo";

const Ending = () => {
    const chosenEnding = Endings.filter(ending => ending.stat === UserInfo.endingStat && ending.threshold === UserInfo.endingThreshold);

    return (
        <>
            <div id="text">{chosenEnding[0].options[Math.floor(Math.random() * chosenEnding[0].options.length)].text}</div>
            <div className="button-container">
            </div>
            <CharCard props="over" id="char-card" className="character-card"/>
        </>
    );
};

export default Ending;