import styled  from "styled-components";

export const ProgressBar = styled.div
    .attrs({className: 'progress-bar'})`
  border: 2px solid #050505;
  width: 76px;
  border-radius: 6px;
  border: ${({ props }) => props=== 0 ? '4px solid #ff0000' : props=== 100 ? '2px solid #37ff00' : '2px solid #333'}; 
  
  > .progress {
    background: #333;
    height: 10px;
    border-radius: 5px;
    width: ${({ props }) => props + "%"};
    transition: width 1.5s;
    background: ${({ props }) => props >= 80 ? '#37ff00' : props <= 20 ? '#ff0000' : '#333'};
  }
`;