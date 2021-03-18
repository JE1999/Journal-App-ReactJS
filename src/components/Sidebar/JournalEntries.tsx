import { useSelector } from 'react-redux'
import { INotes, INote } from '../../types/Reducers/Notes/notesTypes'
import JournalEntry from './JournalEntry'
const JournalEntries = () => {
    
    const { notes } = useSelector((state: INotes) => state.notes)

    return (
        <div className="journal__entries">
            {notes[0]
                ?   
                <>
                    {(notes as Array<INote>).map(note => (
                        <JournalEntry 
                            key={note.id}
                            {...note}
                        />
                    ))}
                </>
                : null
            }
        </div>
    )
}

export default JournalEntries