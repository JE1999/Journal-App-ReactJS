import Swal from "sweetalert2";

import { db } from "../../firebase/firebaseConfig";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";
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

export const startSaveNoteAction = (note: INote | null) => {
    return async (dispatch: Function, getState: Function) => {
        
        const { uid } = getState().auth;
        
        if(!note?.url){
            delete note?.url
        }
        
        const noteToFirestore = {...note}
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/notes/${note?.id}`).update(noteToFirestore)

        dispatch(startLoadingNotesAction(uid))

        Swal.fire('Saved', note?.title, 'success')
    }
}

export const startUploadingAction = (file: any) => {
    return async (dispatch: Function, getState: Function) => {

        const { active: noteActive } = getState().notes

        Swal.fire({
            title: 'Uploading...',
            text: 'please wait...',
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            }
        })

        const fileUrl = await fileUpload(file)
        noteActive.url = fileUrl

        dispatch(startSaveNoteAction(noteActive))

        Swal.close()

    }
}

export const startDeletingAction = (id: any) => {
    return async (dispatch: Function, getState: Function) => {

        const uid = getState().auth.uid
        await db.doc(`${uid}/journal/notes/${id}`).delete()

        dispatch(deleteNoteAction(id))

    }
}

export const deleteNoteAction = (id: string) => ({
    type: NotesTypes.delete,
    payload: id
})

export const noteLogoutAction = () => ({
    type: NotesTypes.logoutCleaning
})