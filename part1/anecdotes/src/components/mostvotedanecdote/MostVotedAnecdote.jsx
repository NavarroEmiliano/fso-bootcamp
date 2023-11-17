/* eslint-disable react/prop-types */

/* Components */
import Anecdote from "../anecdote/Anecdote";
import TotalVotes from "../totalvotes/TotalVotes";

/* Functions */
import mostVotes from "./mostVotes";

const MostVotedAnecdote = ({ points, anecdotes }) => {
  const topVotes = mostVotes(points);
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={anecdotes[topVotes]} />
      <TotalVotes votes={points[topVotes]} />
    </div>
  );
};

export default MostVotedAnecdote;
