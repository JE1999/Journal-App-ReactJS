import JournalEntry from './JournalEntry'
const JournalEntries = () => {
    
    const entries = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <div className="journal__entries">
            {entries.map((value : number) => (
                <JournalEntry key={value}  />
            ))}
        </div>
    )
}

export default JournalEntries