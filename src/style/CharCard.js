import styled  from "styled-components";
import king from "../styles/king.png";
import user from "../styles/user.png";
import church from "../styles/church.png";
import money from "../styles/money.png";
import health from "../styles/health.png";
import over from "../styles/gameoverr.png";

export const CharCard = styled.div
    .attrs({className: 'card'})`
  width: 430px;
  height: 270px;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
  transform-origin: 50% 99%;
  border: 2px solid #384553;
  margin-top: 5px;
  border-radius: 8px;
  background-image: url("${({ props }) =>
                    props==="king" ? king
                  : props==="church" ? church
                  : props==="money" ? money
                  : props==="health" ? health
                  : props==="over" ? over
                  : user}");
`;