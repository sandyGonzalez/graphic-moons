import React, { useState, useEffect } from "react";
import getDataApi from "./config/Api";
import Card from "./components/Card/index";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getDataApi.get("", {});
    setData(res.data.results);
    return res;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data.map((element) => {
        const {
          name,
          count,
          text1,
          text2,
          percentage1,
          percentage2,
          number1,
          number2,
          color,
        } = element.chart;
        return (
          <Card
            name={name}
            color={color}
            count={count}
            text1={text1}
            text2={text2}
            number1={number1}
            number2={number2}
            percentage1={Number(percentage1)}
            percentage2={Number(percentage2)}
          />
        );
      })}
    </div>
  );
}

export default App;
