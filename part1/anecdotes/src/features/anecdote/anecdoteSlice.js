import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../../services/anecdotes'

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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAllAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.postAnecdote(anecdote)
    dispatch(createAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer
