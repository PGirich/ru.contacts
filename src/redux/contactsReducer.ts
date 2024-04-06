import { IAppState } from '../types/IAppstate'
import {
  TOGGLE_FAVOURITES_ACTION,
  GOTO_CONTACT_ACTION,
  ContactsActions,
} from './contactsActions'
import { initialAppState } from './initialstate'

export function contactsReducer(
  state: IAppState = initialAppState,
  action: ContactsActions
) {
  //console.log('state: ', state, 'action: ', action.type)
  switch (action.type) {
    case TOGGLE_FAVOURITES_ACTION:
      const cn = state.contacts.find(({ id }) => id === action.payload.id)
      if (cn) {
        cn.favorite = !cn.favorite
      }
      return state.contacts
    case GOTO_CONTACT_ACTION:
      state.currentContact = action.payload.id
      return state.contacts
    default:
      return state.contacts
  }
}
