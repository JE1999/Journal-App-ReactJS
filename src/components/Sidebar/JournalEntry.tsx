const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize : 'cover',
                    backgroundImage : 'url(https://cdn.eso.org/images/screen/eso1907a.jpg)'
                }} 
            />

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    jhgu ygygyu yguygyu
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}

export default JournalEntry