import React from 'react';
import Chart from '../Chart/index';
import { green, blue, yellow } from '../../config/constants';
import './style.css';


const Card = ({name, count, text1, text2, percentage1, percentage2, number1, number2, color}) => {
    const colorCard = (side, color) => {
      switch (color) {
        case green:
          return `${side}-${green}`;
        case blue:
          return `${side}-${blue}`;
        case yellow:
          return `${side}-${yellow}`;
        default:
          return "";
      }
    };
    return (
      <div className="card-container">
        <div className="card-content">
          <Chart
            name={name}
            count={count}
            text1={text1}
            text2={text2}
            percentage1={percentage1}
            percentage2={percentage2}
            color={color}
          />
          <div className="card-info">
            <div className={colorCard("left", color)}>
              <strong> {text1} </strong>
              <p className="amount">
                <strong className="card-percentage">{percentage1}% </strong>
                &nbsp; {number1}
              </p>
            </div>

            <div className={colorCard("right", color)}>
              <strong> {text2} </strong>
              <p className="amount">
                <strong className="card-percentage">{percentage2}% </strong>{" "}
                &nbsp; {number2}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default Card