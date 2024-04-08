import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { contactsReducer } from './contactsReducer'
import { groupsReducer } from './groupsReducer'

// app state define
const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootState = ReturnType<typeof rootReducer>
