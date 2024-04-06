import { IAppState } from '../types/IAppstate'
import {
  TOGGLE_FAVORITES_ACTION,
  GOTO_CONTACT_ACTION,
  ContactsActions,
} from './contactsActions'
import { DELETE_GROUP_ACTION, GroupsActions } from './groupsActions'
import { initialAppState } from './initialstate'

export function groupsReducer(
  state: IAppState = initialAppState,
  action: GroupsActions // ?why? | ContactsActions
) {
  //console.log('state: ', state, 'action: ', action.type)
  switch (action.type) {
    case DELETE_GROUP_ACTION:
      return state.groups.filter(({ id }) => id !== action.payload.id)
    default:
      return state.groups
  }
}
