import { Note } from "../NotesPage"


const NoteCard: React.FC<{noteData: Note}> = (props) => {
    return (
        <div className="p-3 flex flex-col rounded-md
    bg-white shadow-md">
        <h3 className="font-bold text-lg mb-2">{props.noteData.title}</h3>
        <p 
        className="mb-1"
        >{props.noteData.body}</p>
    </div>
    )
}

export default NoteCard