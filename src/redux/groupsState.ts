import { IGroup } from 'src/types/IGroup'

// data model
export interface IGroupsReducer {
  arrGroups: IGroup[]
}
export const initialGroups: IGroupsReducer = {
  arrGroups: [],
}
