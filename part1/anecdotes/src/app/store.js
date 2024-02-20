import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from '../features/anecdote/anecdoteSlice'
import filterReducer from '../features/filter/filterSlice'
import notificationReducer from '../features/notification/notificationSlice'

export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter : filterReducer,
    notification: notificationReducer
  }
})
