import { DELETE_GROUP_ACTION, GroupsActions } from './groupsActions'
import { IGroupsReducer, initialGroups } from './groupsState'
import { LOAD_ACTION_SUCCESS } from './loadActions'
import { AppActions } from './store'

export function groupsReducer(
  state: IGroupsReducer = initialGroups,
  action: AppActions
) {
  const newState: IGroupsReducer = {
    ...state,
    arrGroups: [...state.arrGroups],
  }
  switch (action.type) {
    case DELETE_GROUP_ACTION:
      newState.arrGroups = state.arrGroups.filter(
        ({ id }) => id !== action.payload.id
      )
      return newState
    case LOAD_ACTION_SUCCESS:
      newState.arrGroups = action.payload.aGr
      return newState
    default:
      return newState
  }
}
