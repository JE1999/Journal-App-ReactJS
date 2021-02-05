import Sidebar from '../../components/Sidebar'
// import NothingSelected from '../../components/Sidebar/NothingSelected'
import Notes from '../../components/Notes'

export default function Journal () {
    return (
        <div className="journal__main-content">

            <Sidebar />

            <main className="journal__main-notes">
                
                {/* <NothingSelected /> */}

                <Notes />

            </main>

        </div>
    )
}
