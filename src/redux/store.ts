import { createStore, combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { groupsReducer } from './groupsReducer'

// app state define
export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    groups: groupsReducer
  })
)
export type RootState = ReturnType<typeof store.getState>
