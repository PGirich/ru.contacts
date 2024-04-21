import { IContact } from 'src/types/IContact'

// data model
export interface IContactsReducer {
  arrContacts: IContact[]
}
export const initialContacts: IContactsReducer = {
  arrContacts: [],
}
