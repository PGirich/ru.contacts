import { IAppState } from '../types/IAppstate'
import {
  TOGGLE_FAVORITES_ACTION,
  GOTO_CONTACT_ACTION,
  AppActions,
} from './actions'
import { initialAppState } from './store'


export function productsReducer(
  state: IAppState = initialAppState,
  action: AppActions
) {
  switch (action.type) {
    case TOGGLE_FAVORITES_ACTION:
      const cn = state.contacts.find(({id})=>id===action.payload.id)  
      if ( cn ) {
        cn.favorite = !cn.favorite
      }
      return state
    case GOTO_CONTACT_ACTION:
      state.currentContact = action.payload.id
      return state
    default:
      return state
  }
}
