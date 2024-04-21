import { TOGGLE_FAVOURITES_ACTION } from './contactsActions'
import { IContactsReducer, initialContacts } from './contactsState'
import { LOAD_ACTION_SUCCESS } from './loadActions'
import { AppActions } from './store'

export function contactsReducer(
  state: IContactsReducer = initialContacts,
  action: AppActions
) {
  const newState: IContactsReducer = {
    ...state,
    arrContacts: [...state.arrContacts],
  }
  switch (action.type) {
    case TOGGLE_FAVOURITES_ACTION:
      const cnIdx = newState.arrContacts.findIndex(
        ({ id }) => id === action.payload.id
      )
      if (cnIdx !== -1) {
        const cn = newState.arrContacts[cnIdx]
        newState.arrContacts[cnIdx] = { ...cn, favorite: !cn.favorite }
      }
      return newState
    case LOAD_ACTION_SUCCESS:
      action.payload.aCont.forEach((contact: any) => {
        let cn = {
          ...contact,
          favorite: undefined,
          dataModified: undefined,
        }
        newState.arrContacts.push(cn)
      })
      newState.arrContacts[0].favorite = true
      newState.arrContacts[1].favorite = true
      newState.arrContacts[2].favorite = true
      newState.arrContacts[3].favorite = true
      return newState
    default:
      return newState
  }
}
