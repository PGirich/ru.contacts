import { DELETE_GROUP_ACTION, GroupsActions } from './groupsActions'
import { IGroupsState } from './groupsState'
import { initialGroupsState } from './initialstate'

export function groupsReducer(
  groupsState: IGroupsState = initialGroupsState,
  action: GroupsActions // ?why? | ContactsActions
) {
  //console.log('state: ', state, 'action: ', action.type)
  switch (action.type) {
    case DELETE_GROUP_ACTION:
      return groupsState.arrGroups.filter(({ id }) => id !== action.payload.id)
    default:
      return groupsState
  }
}
