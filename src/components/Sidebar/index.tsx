import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import JournalEntries from './JournalEntries'

import { startNewNoteAction } from '../../actions/Notes/notesAction'

import { IAuth } from '../../types/Reducers/Auth/authTypes'

const Sidebar = () => {

    const dispatch = useDispatch()

    const stateUser = useSelector((state: IAuth) => state.auth)

    const handleAddNew = () => {
        dispatch(startNewNoteAction())
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <span> {stateUser.name}</span>
                </h3>
            </div>

            <div 
                className="journal__new-entry"
                onClick={handleAddNew}    
            >
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-5">
                    New Entry
                </p>
            </div>

            <JournalEntries />
        
        </aside>
    )
}

export default memo(Sidebar)