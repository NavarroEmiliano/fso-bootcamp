import { useState } from "react";
import "./App.css";
import Statistics from "./components/statistics/Statistics";
import Button from "./components/button/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };


  return (
    <div>
      <h2>Give feedback</h2>
      <Button handler={handleClickGood} text="Good"/>
      <Button handler={handleClickNeutral} text="Neutral"/>
      <Button handler={handleClickBad} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
