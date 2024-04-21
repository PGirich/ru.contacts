import { ThunkAction } from 'redux-thunk'
import { AppActions, RootState } from './store'

export const LOAD_ACTION = 'LOAD_ACTION'
export const LOAD_ACTION_SUCCESS = 'LOAD_ACTION_SUCCESS'
export const LOAD_ACTION_FAIL = 'LOAD_ACTION_FAIL'
export type LoadActionsType =
  | typeof LOAD_ACTION
  | typeof LOAD_ACTION_SUCCESS
  | typeof LOAD_ACTION_FAIL

export interface LoadSuccessPayload {
  aCont: any
  aGr: any
}

export function createLoadAction(): ThunkAction<
  void,
  RootState,
  void,
  AppActions
> {
  return async (dispatch) => {
    dispatch(LoadActionCreator())

    const payload: LoadSuccessPayload = { aCont: undefined, aGr: undefined }
    let res
    res = await fetch(
      'https://mocki.io/v1/dc31392d-7f28-4b3a-9c35-233373e80f32'
    )
    payload.aCont = await res.json()
    res = await fetch(
      'https://mocki.io/v1/7b16d2fe-2200-42ff-bf4a-f77586de4cfb'
    )
    payload.aGr = await res.json()

    if (payload.aCont.length > 0) {
      dispatch(LoadSuccessActionCreator(payload))
    } else {
      dispatch(LoadFailActionCreator())
    }
  }
}

export interface ILoadAction {
  type: typeof LOAD_ACTION
}
export function LoadActionCreator(): ILoadAction {
  return { type: LOAD_ACTION }
}
export interface ILoadSuccessAction {
  type: typeof LOAD_ACTION_SUCCESS
  payload: LoadSuccessPayload
}
export function LoadSuccessActionCreator(
  payload: LoadSuccessPayload
): ILoadSuccessAction {
  return { type: LOAD_ACTION_SUCCESS, payload }
}
export interface ILoadFailAction {
  type: typeof LOAD_ACTION_FAIL
}
export function LoadFailActionCreator(): ILoadFailAction {
  return { type: LOAD_ACTION_FAIL }
}

export type LoadActions = ILoadAction | ILoadSuccessAction | ILoadFailAction
