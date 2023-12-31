/* Hooks */
import { useState } from "react";

/* Styles */
import "./App.css";

/* Components */
import Button from "./components/button/Button";
import TotalVotes from "./components/totalvotes/TotalVotes";
import MostVotedAnecdote from "./components/mostvotedanecdote/MostVotedAnecdote";
import Anecdote from "./components/anecdote/Anecdote";

function App() {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({});
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handleVote = () => {
    const pointsCopy = { ...points };
    if (Object.hasOwnProperty.call(pointsCopy, selected)) {
      pointsCopy[selected] += 1;
    } else {
      pointsCopy[selected] = 1;
    }

    setPoints(pointsCopy);
  };


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={anecdotes[selected]}/>
      <TotalVotes votes={points[selected]}/>
      <Button handler={handleVote} text="Vote" />
      <Button handler={handleClick} text="Next Anecdote" />
      <MostVotedAnecdote points={points} anecdotes={anecdotes}/>
    </div>
  );
}

export default App;
