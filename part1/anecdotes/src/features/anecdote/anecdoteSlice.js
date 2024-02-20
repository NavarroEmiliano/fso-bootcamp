import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote: (state, action) => {
      const newAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== newAnecdote.id ? anecdote : newAnecdote
      )
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

export const updateAnecdote = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteServices.putAnecdote(id)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer
