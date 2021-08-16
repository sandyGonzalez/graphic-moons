import React from 'react'
import { ChartDonut, ChartThemeColor} from '@patternfly/react-charts';
import { green, blue, yellow } from '../../config/constants';
import './style.css';


  const Chart = ({name, count, text1, text2, percentage1, percentage2, color}) => {
    const chartColor = (color) => {
      switch (color) {
        case green:
          return ChartThemeColor.green;
        case blue:
          return ChartThemeColor.cyan;
        case yellow:
          return ChartThemeColor.gold;
        default:
          return ChartThemeColor.black;
      }
    };

     return(
      <div className="chart-container">
          <ChartDonut
        constrainToVisibleArea={true}
        data={[{},{},{ x: text2, y: percentage2 },{ x: text1 , y: percentage1},]}
        donutOrientation="top"
        height={275}
        subTitle = {name}
        subTitlePosition="center"
        title={count}
        ariaTitle="bottom"
        themeColor={chartColor(color)}
        width={250}
      />  
      </div>
    )
  }

  export default Chart