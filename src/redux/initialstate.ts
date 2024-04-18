import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import { IContactsState } from './contactsState'
import { IGroupsState } from './groupsState'

// initial state define
export const initialContactsState: IContactsState = {
  arrContacts: [],
}
export const initialGroupsState: IGroupsState = {
  arrGroups: DATA_GROUP_CONTACT,
}
DATA_CONTACT.forEach((contact) => {
  let cn = {
    ...contact,
    favorite: undefined,
    dataModified: undefined,
  }
  initialContactsState.arrContacts.push(cn)
})
initialContactsState.arrContacts[0].favorite = true
initialContactsState.arrContacts[1].favorite = true
initialContactsState.arrContacts[2].favorite = true
initialContactsState.arrContacts[3].favorite = true
