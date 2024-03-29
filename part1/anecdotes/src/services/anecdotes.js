import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const postAnecdote = async content => {
  const id = getId()
  const object = { content, id, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const putAnecdote = async anecdote => {
  const newObject = { ...anecdote, votes:anecdote.votes + 1 }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, newObject)
  return response.data
}

export default { getAllAnecdotes, postAnecdote, putAnecdote }
