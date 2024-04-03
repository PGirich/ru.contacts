import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { Dispatch } from "redux";
import { AppActions } from "./actions";
import { IAppState } from "src/types/IAppstate";

export const useAppDispatch = useDispatch<Dispatch<AppActions>>
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
export const useAppStore = useStore<IAppState>
