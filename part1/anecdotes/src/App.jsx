import AnecdoteForm from './components/anecdoteForm/AnecdoteForm'
import AnecdoteList from './components/anecdoteList/AnecdoteList'
import Filter from './components/filter/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <Filter/>
      <AnecdoteList />
    </div>
  )
}

export default App
