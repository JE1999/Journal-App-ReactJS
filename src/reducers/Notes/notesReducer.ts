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
        
        default:
            return state;
    }
    
}