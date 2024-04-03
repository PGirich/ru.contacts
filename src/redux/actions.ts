import { IContact } from "src/types/IContact";

// Actions
export const TOGGLE_FAVORITES_ACTION = 'TOGGLE_FAVORITES_ACTION';
export const GOTO_CONTACT_ACTION = 'GOTO_CONTACT_ACTION';


// Action Creators
interface IToggleFavoritesAction {
    type: typeof TOGGLE_FAVORITES_ACTION;
    payload: {
        id: IContact['id'];
    }
}
export function toggleFavoritesActionCreator(id: IContact['id']): IToggleFavoritesAction {
    return { type: TOGGLE_FAVORITES_ACTION, payload: { id } }
}

interface IGotoContactAction {
    type: typeof GOTO_CONTACT_ACTION;
    payload: {
        id: IContact['id'];
    }
}
export function gotoContactActionCreator(id: IContact['id']): IGotoContactAction {
    return { type: GOTO_CONTACT_ACTION, payload: { id } }
}

// Action Types
export type AppActions = IToggleFavoritesAction | IGotoContactAction;
