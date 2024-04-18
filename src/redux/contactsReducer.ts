import { TOGGLE_FAVOURITES_ACTION, ContactsActions } from './contactsActions'
import { initialContactsState } from './initialstate'
import { IContactsState } from './contactsState'

export function contactsReducer(
  contactsState: IContactsState = initialContactsState,
  action: ContactsActions
) {
  //console.log('state: ', state, 'action: ', action.type)
  switch (action.type) {
    case TOGGLE_FAVOURITES_ACTION:
      const newstate = {
        ...contactsState,
        arrContacts: [...contactsState.arrContacts],
      }
      const cn = newstate.arrContacts.find(({ id }) => id === action.payload.id)
      if (cn) {
        cn.favorite = !cn.favorite
      }
      return newstate
    default:
      return contactsState
  }
}
