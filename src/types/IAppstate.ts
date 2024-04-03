import { IContact } from './IContact'
import { IGroup } from './IGroup'

export type IAppState = {
  contacts: IContact[]
  groups: IGroup[]
  dataModified: number | undefined
  currentGroup: IGroup['id'] | undefined
  currentContact: IContact['id'] | undefined
}
