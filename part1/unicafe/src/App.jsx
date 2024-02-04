import "./App.css";
import Statistics from "./components/statistics/Statistics";
import Button from "./components/button/Button";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()


  const handleClickGood = () => {
    dispatch({type:'GOOD'})
  };
  const handleClickNeutral = () => {
    dispatch({type:'OK'})
  };
  const handleClickBad = () => {
    dispatch({type:'BAD'})
  };

  const handleResetAll = () =>{
    dispatch({type:'ZERO'})
  }


  return (
    <div>
      <h2>Give feedback</h2>
      <Button handler={handleClickGood} text="Good"/>
      <Button handler={handleClickNeutral} text="Neutral"/>
      <Button handler={handleClickBad} text="Bad"/>
      <Button handler={handleResetAll} text="Reset"/>
      <Statistics/>
    </div>
  );
}

export default App;
