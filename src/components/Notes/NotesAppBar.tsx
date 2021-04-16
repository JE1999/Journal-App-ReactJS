import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { startUploadingAction } from '../../actions/Notes/notesAction'

interface IProps {
    saveNote: () => void
}

interface Event<T = EventTarget> {
    target: T;
    // ...
  }

const NotesAppBar = ({saveNote}: IProps) => {

    const dispatch = useDispatch()

    const handlePicture = () => {
        document.querySelector<any>('#fileSelector').click()
    }

    const handleFileChange = (e: Event<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file){
            dispatch(startUploadingAction(file))
        }

    }

    return (
        <div className="notes__appbar">
            <input
                type="file"
                id="fileSelector"
                name="file"
                style={{display: 'none'}}
                onChange={handleFileChange}
            />
            
            <div>
                <button
                    className="btn"
                    onClick={handlePicture}
                >Picture
                </button>
                
                <button 
                    className="btn"
                    onClick={saveNote}
                >Save
                </button>
            </div>
        </div>
    )
}

export default memo(NotesAppBar)