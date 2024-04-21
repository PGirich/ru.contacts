import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import { thunk, ThunkDispatch } from 'redux-thunk'
import { contactsReducer } from './contactsReducer'
import { groupsReducer } from './groupsReducer'
import { ContactsActions } from './contactsActions'
import { GroupsActions } from './groupsActions'
import { createLoadAction, LoadActions } from './loadActions'
import { IContactsReducer } from './contactsState'
import { IGroupsReducer } from './groupsState'

export type RootState = {
  contacts: IContactsReducer
  groups: IGroupsReducer
}
const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
})
//export type RootState = ReturnType<typeof rootReducer>

export const store: Store<RootState, AppActions> = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
)
const dispatch: ThunkDispatch<RootState, void, AppActions> = store.dispatch
dispatch(createLoadAction())

export type AppActions = ContactsActions | GroupsActions | LoadActions
