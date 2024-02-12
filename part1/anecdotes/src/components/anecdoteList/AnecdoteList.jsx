import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../../features/anecdote/anecdoteSlice'
const AnecdoteList = () => {
  const dispatch = useDispatch()

  const unsortedAnecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes.filter(a =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    )
  )

  const sortedAnecdotes = [...unsortedAnecdotes].sort(
    (a, b) => b.votes - a.votes
  )


  const vote = id => {
    dispatch(voteAnecdote(id))
  }
  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
