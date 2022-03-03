import { Note } from "../NotesPage"


const NoteCard: React.FC<{noteData: Note}> = (props) => {

    function openNote() {
        
    }

    return (
        <div 
        onClick={openNote}
        className="p-3 flex flex-col rounded-md
    bg-white shadow-md cursor-pointer hover:shadow-lg transition-all
    hover:scale-105">
        <h3 className="font-bold text-lg mb-2">{props.noteData.title}</h3>
        <p 
        className="mb-1"
        >{props.noteData.body}</p>
    </div>
    )
}

export default NoteCard