import "../styles/situation.css";
import {Link, useHistory, useParams, withRouter} from "react-router-dom";
import Material from "../globals/Material";
import {CharCard} from "../styles/CharCard";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import UserInfo from "../globals/UserInfo";


const Situation = () => {
    const { id } = useParams();
    const card = Material[id];
    const cards = getCards();
    const nextCardUrl = `/card/${getSituationId()}`;
    const history = useHistory();
    const restartUrl = "/intro";

    const CountDownTimer = () => (
        <CountdownCircleTimer
            isPlaying
            duration={100}
            colors={[
                ['#8ffaaa', 0.33],
                ['#f8d37e', 0.33],
                ['#f67474', 0.33],
            ]}
            trailColor={'#0c1122'}
            size={130}
            onComplete={() => {

            }}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    )

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

    function delay(e, option) {
        e.preventDefault();
        e.stopPropagation();
        let img = e.target;
        makeChoice(option, img);
    }

    function animateCard(img) {
        if (img.className === 'btn option btn-left') {
            document.getElementsByClassName("character-card")[0].classList.add('character-card-nope');
        } else document.getElementsByClassName("character-card")[0].classList.add('character-card-yay');

    }

    function makeChoice(option, img) {
        impactStats(option);
        animateCard(img);
        delayNextSituation();
    }

    function delayNextSituation() {
        window.setTimeout(() => {
            history.push(nextCardUrl);
        }, 1000)
    }

    function restart(e) {
        UserInfo.stats.forEach(stat => stat.value = 50)
        UserInfo.isGameOver = false;
        UserInfo.score = 0;
    }

    const impactStats = (choice) => {
        for (let stat of UserInfo.stats) {
            for (let impact of card.options[choice].impacts) {
                if (impact.impactStat === stat.name) {
                    stat.value += impact.impactValue;
                    if (stat.value >= UserInfo.threshold.max) {
                        stat.value = UserInfo.threshold.max
                        UserInfo.isGameOver=true;
                        UserInfo.endingStat=stat.name;
                        UserInfo.endingThreshold="upper";
                    } else if (stat.value <= UserInfo.threshold.min) {
                        stat.value = UserInfo.threshold.min
                        UserInfo.isGameOver=true;
                        UserInfo.endingStat=stat.name;
                        UserInfo.endingThreshold="lower";
                    }
                }
            }
        }
        calculateScore()
    }

    function calculateScore() {
        UserInfo.score ++;
        UserInfo.highScore = UserInfo.highScore < UserInfo.score ? UserInfo.score : UserInfo.highScore;
    }

    return (
        <>
            <div className="score-container"><span id="score">{UserInfo.score}</span> years lived</div>
            <div className="high-score-container">High score: <span id="high-score">{UserInfo.highScore}</span></div>
            <div className="countdown">
                <CountDownTimer/>
            </div>
                    <div id="text">{card.text}</div>
                    <div className="button-container">
                    <Link to={nextCardUrl} onClick={(e) => {delay(e, 0)}}
                    className="btn option btn-left" value="1" id="option1">{card.options[0].text}
                    </Link>
                    <Link to={nextCardUrl}  onClick={(e) => {delay(e, 1)}}
                    className="btn option btn-right" value="2" id="option2">{card.options[1].text}
                    </Link>
                        <CharCard props={card.theme} id="char-card" className="character-card"/>
                    </div>
            <Link to={restartUrl} onClick={restart} className="btn start">Restart</Link>
            </>
    );
};

export default withRouter(Situation);