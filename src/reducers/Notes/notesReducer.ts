import { IAction, IPayload, NotesTypes } from "../../types/Reducers/Notes/notesTypes";

const initialState: IPayload = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action: IAction) =>  {

    switch (action.type) {
        case NotesTypes.active:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case NotesTypes.load:
            return {
                ...state,
                notes: action.payload
            }

        case NotesTypes.delete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter((note: any) => note.id !== action.payload)
            }

        case NotesTypes.logoutCleaning:
            return initialState
        default:
            return state;
    }
    
}