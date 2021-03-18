import { useSelector } from 'react-redux'

import Sidebar from '../../components/Sidebar'
import NothingSelected from '../../components/Sidebar/NothingSelected'
import Notes from '../../components/Notes'

import { INotes } from '../../types/Reducers/Notes/notesTypes'

export default function Journal () {

    const stateNotes = useSelector((state: INotes) => state.notes)

    return (
        <div className="journal__main-content">

            <Sidebar />

            <main className="journal__main-notes">
                
                {stateNotes.active
                    ? <Notes />
                    : <NothingSelected />
                }

            </main>

        </div>
    )
}
