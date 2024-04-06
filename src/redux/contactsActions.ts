import { IContact } from "src/types/IContact";

// Actions
export const TOGGLE_FAVOURITES_ACTION = 'TOGGLE_FAVORITES_ACTION';

// Action Creators
interface IToggleFavoritesAction {
    type: typeof TOGGLE_FAVOURITES_ACTION;
    payload: {
        id: IContact['id'];
    }
}
export function toggleFavoritesActionCreator(id: IContact['id']): IToggleFavoritesAction {
    return { type: TOGGLE_FAVOURITES_ACTION, payload: { id } }
}


// Action Types
export type ContactsActions = IToggleFavoritesAction
