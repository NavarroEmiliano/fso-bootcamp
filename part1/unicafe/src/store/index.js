import { createStore } from "@reduxjs/toolkit"
import counterReducer from "./reducer/counterReducer"

export const store = createStore(counterReducer)
