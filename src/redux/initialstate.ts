import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import { IAppState } from 'src/types/IAppstate'

// initial state define
export const initialAppState: IAppState = {
  contacts: [],
  groups: DATA_GROUP_CONTACT,
  dataModified: Date.now(),
  currentGroup: undefined,
  currentContact: undefined,
}
DATA_CONTACT.forEach((contact) => {
  let cn = {
    ...contact,
    favorite: undefined,
    dataModified: undefined,
  }
  initialAppState.contacts.push(cn)
})
initialAppState.contacts[0].favorite = true
initialAppState.contacts[1].favorite = true
initialAppState.contacts[2].favorite = true
initialAppState.contacts[3].favorite = true
