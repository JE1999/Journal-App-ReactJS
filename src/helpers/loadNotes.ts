import { db } from '../firebase/firebaseConfig'

export interface INotes {
    id: string,
}


export const loadNotes = async (uid: string) => {

    const noteSnap = await db.collection(`${uid}/journal/notes`).get();

    const notes: INotes[] = [];

    noteSnap.forEach(snapChild => {
        notes.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    })

    return notes;
}