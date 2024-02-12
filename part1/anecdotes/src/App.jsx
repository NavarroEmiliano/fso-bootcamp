import AnecdoteForm from './components/anecdoteForm/AnecdoteForm'
import AnecdoteList from './components/anecdoteList/AnecdoteList'
import Filter from './components/filter/Filter'
import Notification from './components/notification/Notification'

const App = () => {
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
