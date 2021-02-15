import { memo } from 'react'
import { useDispatch } from 'react-redux'

import { startLogoutAction } from '../../actions/Auth/authAction'

const NotesAppBar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogoutAction() )
    }

    return (
        <div className="notes__appbar">
            <span>28 de noviembre del 2021</span>
            
            <div>
                <button
                    className="btn"
                >Picture
                </button>
                
                <button 
                    className="btn"
                >Save
                </button>
            </div>

            <button 
                className="btn"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default memo(NotesAppBar)