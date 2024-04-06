import { IContact } from './IContact'
import { IGroup } from './IGroup'

export type IAppState = {
  contacts: IContact[]
  groups: IGroup[]
}
