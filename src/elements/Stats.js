import churchStat from "../images/church-stat.png";
import moneyStat from "../images/money-stat.png";
import kingStat from "../images/king-stat.png";
import healthStat from "../images/health-stat.png";


const Stats = () => {

    return (
        <div className="stats">
            <div className="stat">
                    <img src={churchStat} className="stat-symbol" alt="church-stat"/><br/>

            </div>
            <div className="stat">
                    <img src={moneyStat} className="stat-symbol" alt="money-stat"/><br/>

            </div>
            <div className="stat">
                    <img src={kingStat} className="stat-symbol" alt="king-stat"/><br/>

            </div>
            <div className="stat">
                    <img src={healthStat} className="stat-symbol" alt="health-stat"/><br/>

            </div>
        </div>
    );
};

export default Stats;