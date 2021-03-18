import { db } from "../../firebase/firebaseConfig";
import { loadNotes } from "../../helpers/loadNotes";
import { NotesTypes, INote } from "../../types/Reducers/Notes/notesTypes";

export const startNewNoteAction = () => {
    return async (dispatch: Function, getState: Function) => {
        
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch( activeNoteAction(doc.id, newNote) );
        
    }
}


export const activeNoteAction = (id: string | undefined, note: INote) => ({
    type: NotesTypes.active,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotesAction = (uid: string) => {
    return async (dispatch: Function) => {

        const notes = await loadNotes(uid)
        dispatch(setNotesAction(notes))
    }
}

export const setNotesAction = (notes: any) => ({
    type: NotesTypes.load,
    payload: notes
})
