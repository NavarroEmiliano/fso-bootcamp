import { useDispatch, useSelector } from 'react-redux'
import { updateAnecdote } from '../../features/anecdote/anecdoteSlice'
import { setNotification } from '../../features/notification/notificationSlice'
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
    const anecdote = unsortedAnecdotes.find(a => a.id === id)
    const notification = `You voted for ${anecdote.content}`
    dispatch(updateAnecdote(anecdote))
    dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(setNotification(''))
    }, 5000)
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
