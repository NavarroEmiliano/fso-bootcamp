import { useEffect } from 'react'
import AnecdoteForm from './components/anecdoteForm/AnecdoteForm'
import AnecdoteList from './components/anecdoteList/AnecdoteList'
import Filter from './components/filter/Filter'
import Notification from './components/notification/Notification'

import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './features/anecdote/anecdoteSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App
