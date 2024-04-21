import { IGroup } from 'src/types/IGroup'
import { ILoadSuccessAction } from './loadActions'

// Actions
export const DELETE_GROUP_ACTION = 'DELETE_GROUP_ACTION'

// Action Creators
interface IDeleteGroupAction {
  type: typeof DELETE_GROUP_ACTION
  payload: {
    id: IGroup['id']
  }
}
export function deleteGroupActionCreator(id: IGroup['id']): IDeleteGroupAction {
  return { type: DELETE_GROUP_ACTION, payload: { id } }
}

// Action Types
export type GroupsActions = IDeleteGroupAction
