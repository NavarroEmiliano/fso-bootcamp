import AnecdoteForm from './components/anecdoteForm/AnecdoteForm'
import AnecdoteList from './components/anecdoteList/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App
