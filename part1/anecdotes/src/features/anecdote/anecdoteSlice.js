import { createSlice } from '@reduxjs/toolkit'

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
    createAnecdote: (state, action) => state.concat(action.payload),
    setAnecdotes: (state, action) => action.payload
  }
})

export const { voteAnecdote, createAnecdote, setAnecdotes } =
  anecdoteSlice.actions

export default anecdoteSlice.reducer
