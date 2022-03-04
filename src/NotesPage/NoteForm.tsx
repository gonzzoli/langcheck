import { useEffect, useRef, useState } from "react"
import { Note } from "./NotesPage"


const NoteForm: React.FC<{
    noteFormData: Note | undefined,
    onEditNote: (note: Note)=>void,
    onDeleteNote: (id: number)=>void,
    onAddNote: (title: string, body: string)=>void
    }> = (props) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLTextAreaElement>(null)
    const [showError, setShowError] = useState(false)

    function saveNote() {
        if(titleRef.current?.value === '' && bodyRef.current?.value === ''){
            setShowError(true)
            return
        }

        // const notesData: Note[] = JSON.parse(localStorage.getItem('notesArray') || '[]')
        if(props.noteFormData) {
            props.onEditNote({
                id: props.noteFormData!.id,
                title: titleRef.current!.value,
                body: bodyRef.current!.value
            })
            // const openedNote = notesData.find(note => note.id === props.noteFormData!.id)
            // openedNote!.title = titleRef.current!.value
            // openedNote!.body = bodyRef.current!.value
        } else {
            props.onAddNote(
                titleRef.current!.value,
                bodyRef.current!.value)
            // const nextId = (Math.max(...notesData.map((note: Note) => note.id), 0))+1
            // notesData.push({
            //     id: nextId, 
            //     title: titleRef.current!.value, 
            //     body: bodyRef.current!.value
            // })
        }
        
        // localStorage.setItem('notesArray', JSON.stringify(notesData))
    }

    function checkTitle() {
        if(titleRef.current?.value.length === 0) return
        setShowError(false)
    }

    function deleteNote() {
        props.onDeleteNote(props.noteFormData!.id)
        // const notesData: Note[] = JSON.parse(localStorage.getItem('notesArray') || '[]')
        // const filteredNotes = notesData.filter(note => note.id !== props.noteFormData!.id)
        // localStorage.setItem('notesArray', JSON.stringify(filteredNotes))
        // props.onCloseModal()
    }

    useEffect(() => {
        if(props.noteFormData) {
            titleRef.current!.value = props.noteFormData.title
            bodyRef.current!.value = props.noteFormData.body
        }
    }, [])


    return (
        <div className="p-2 bg-white rounded-md w-2/3 max-w-xl">
            <input
            onChange={checkTitle}
            ref={titleRef}
            className={showError ? `w-full outline-none transition-all
            rounded-md border-b-2 border-red-500 focus:-mb-0.5
            font-bold p-1`
            :
            `w-full outline-none transition-all
            rounded-md focus:border-b-2 border-black focus:-mb-0.5
            font-bold p-1`}
            placeholder="Titulo..." />
            {showError && <p className="text-red-500 p-1 pb-0 text-sm">Set a title at least!</p>}
            <hr className="my-2"></hr>
            <textarea
            ref={bodyRef} 
            className="resize-none w-full outline-none transition-all
            rounded-md focus:border-b-2 border-orange focus:-mb-0.5 p-1
            h-80"
            placeholder="Tu nota..." />
            <div className="flex justify-between items-center">
                {props.noteFormData && <button
                onClick={deleteNote}
                className="py-1 px-4 text-red-600 bg-red-100
                hover:bg-red-200 transition-all rounded-md mt-2 ml-0">
                Eliminar</button> }
                <button
                onClick={saveNote}
                className="py-1 px-4 bg-light-orange
                hover:bg-orange transition-all rounded-md mt-2 ml-0">
                Guardar</button>
            </div>
        </div>
    )
}

export default NoteForm