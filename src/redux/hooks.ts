import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux'
import { Dispatch } from 'redux'
import { ContactsActions } from './contactsActions'
import { IAppState } from 'src/types/IAppstate'
import { GroupsActions } from './groupsActions'

export const useContactsDispatch = useDispatch<Dispatch<ContactsActions>>
export const useGroupsDispatch = useDispatch<Dispatch<GroupsActions>>
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector
export const useAppStore = useStore<IAppState>
