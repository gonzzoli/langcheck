import { Note } from "../NotesPage"
import NoteCard from "./NoteCard"


const NotesTile: React.FC<{notes: Note[]}> = (props) => {
    return (
        <div className="flex 
        flex-col shrink-0
        gap-8 w-1/3 mdsm:w-1/2 sm:w-full">
            {props.notes.map(note => <NoteCard key={note.id} noteData={note} />)}
        </div>
    )
}

export default NotesTile