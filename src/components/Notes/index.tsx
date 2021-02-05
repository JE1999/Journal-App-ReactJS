import NotesAppBar from './NotesAppBar'

const Notes = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happened today?"
                    className="notes__textarea"
                />

                <div className="notes__image">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        alt="imagen"
                    />
                </div>

            </div>

        </div>
    )
}

export default Notes
