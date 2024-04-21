import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux'
import { Dispatch } from 'redux'
import { ContactsActions } from './contactsActions'
import { GroupsActions } from './groupsActions'
import { RootState } from './store'

export const useContactsDispatch = useDispatch<Dispatch<ContactsActions>>
export const useGroupsDispatch = useDispatch<Dispatch<GroupsActions>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore<RootState>
