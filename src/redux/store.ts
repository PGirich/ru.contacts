import { createStore, combineReducers } from 'redux'
import { productsReducer } from './productsReducer'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from '../__data__/index'
import { IAppState } from '../types/IAppstate'
import { IContact } from 'src/types/IContact'

export const initialAppState: IAppState = {
  contacts: [],
  groups: DATA_GROUP_CONTACT,
  dataModified: Date.now(),
  currentGroup: undefined,
  currentContact: undefined,
}
DATA_CONTACT.forEach((contact) =>
  initialAppState.contacts.push({
    ...contact,
    favorite: undefined,
    dataModified: undefined,
  })
)
initialAppState.contacts[0].favorite = true
initialAppState.contacts[1].favorite = true
initialAppState.contacts[2].favorite = true
initialAppState.contacts[3].favorite = true

export const store = createStore(
  combineReducers({
    products: productsReducer,
  })
)
export type RootState = ReturnType<typeof store.getState>
