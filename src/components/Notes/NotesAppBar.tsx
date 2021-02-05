const NotesAppBar = () => {
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

            <button className="btn">
                Logout
            </button>
        </div>
    )
}

export default NotesAppBar