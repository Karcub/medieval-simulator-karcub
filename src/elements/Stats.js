import churchStat from "../images/church-stat.png";
import moneyStat from "../images/money-stat.png";
import kingStat from "../images/king-stat.png";
import healthStat from "../images/health-stat.png";
import {ProgressBar} from "../styles/ProgressBar";
import UserInfo from "../globals/UserInfo";

const Stats = () => {

    return (
        <div className="stats">
            <div className="stat">
                    <img src={churchStat} className="stat-symbol" alt="church-stat"/><br/>
                    <ProgressBar props={UserInfo.stats[0].value}>
                        <div className="progress"/>
                    </ProgressBar>
            </div>
            <div className="stat">
                    <img src={moneyStat} className="stat-symbol" alt="money-stat"/><br/>
                    <ProgressBar props={UserInfo.stats[2].value}>
                        <div className="progress"/>
                    </ProgressBar>
            </div>
            <div className="stat">
                    <img src={kingStat} className="stat-symbol" alt="king-stat"/><br/>
                    <ProgressBar props={UserInfo.stats[1].value}>
                        <div className="progress"/>
                    </ProgressBar>
            </div>
            <div className="stat">
                    <img src={healthStat} className="stat-symbol" alt="health-stat"/><br/>
                    <ProgressBar props={UserInfo.stats[3].value}>
                        <div className="progress"/>
                    </ProgressBar>
            </div>
        </div>
    );
};

export default Stats;