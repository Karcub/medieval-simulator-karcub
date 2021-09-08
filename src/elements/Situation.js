import "../styles/situation.css";
import {Link, useHistory, useParams, withRouter} from "react-router-dom";
import Material from "../globals/Material";
import {CharCard} from "../style/CharCard";


const Situation = () => {
    const { id } = useParams();
    const card = Material[id];
    const cards = getCards();
    const nextCardUrl = `/card/${getSituationId()}`;
    const history = useHistory();

    function getCards() {
        card.used = true;
        if (Material.filter(situation => !situation.used).length === 1) {
            Material.forEach(situation => situation.used = false)
        }
        return Material.filter(situation => !situation.used);
    }

    function getSituationId() {
        for (let i = cards.length- 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
        return (cards[0].id);
    }

    function animateCard(img) {
        if (img.className === 'btn option btn-left') {
            document.getElementsByClassName("character-card")[0].classList.add('character-card-nope');
        } else document.getElementsByClassName("character-card")[0].classList.add('character-card-yay');

    }

    function makeChoice(option, img) {

        animateCard(img);
        delayNextSituation();
    }

    function delayNextSituation() {
        window.setTimeout(() => {
            history.push(nextCardUrl);
        }, 1000)
    }

    return (
        <>
                    <div id="text">{card.text}</div>
                    <div className="button-container">
                    <Link to={nextCardUrl}
                    className="btn option btn-left" value="1" id="option1">{card.options[0].text}
                    </Link>
                    <Link to={nextCardUrl}
                    className="btn option btn-right" value="2" id="option2">{card.options[1].text}
                    </Link>
                        <CharCard props={card.theme} id="char-card" className="character-card"/>
                    </div>
            </>
    );
};

export default withRouter(Situation);