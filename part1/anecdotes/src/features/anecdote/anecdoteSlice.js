import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote: (state, action) => {
      const anecdoteId = action.payload
      const anecdoteFound = state.find(a => a.id === anecdoteId)
      const changedAnecdote = {
        ...anecdoteFound,
        votes: anecdoteFound.votes + 1
      }

      return state.map(a => (a.id !== anecdoteId ? a : changedAnecdote))
    },
    createAnecdote: (state, action) => state.concat(asObject(action.payload)),
    setAnecdotes: (state, action) => action.payload
  }
})

export const { voteAnecdote, createAnecdote, setAnecdotes } =
  anecdoteSlice.actions

export default anecdoteSlice.reducer
