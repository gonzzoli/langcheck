import { useEffect, useState } from "react"
import NoteForm from "./NoteForm"
import NotesTile from "./NotesTile/NotesTile"

export type Note = {
id: number,
title: string,
body: string
}

const NotesPage: React.FC = (props) => {
    //variable used when opening the form from a note, and not 
    // to create a new one
    const [noteFormData, setNoteFormData] = useState<Note|undefined>(undefined)
    const notesData: Note[] = JSON.parse(localStorage.getItem('notesArray') || '[]')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        // As this triggers a re-render on each resize, each NewsCard
        // calculates the text height again, causing some extra calculations
        // not expensive anyways, but not the best visuals when resizing.
        // You can see the text resizing a lot.
        function updateWidth() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, [])

    function openForm() {
        setShowForm(true)
    }

    function openFormFromNote(noteData: Note) {
        setNoteFormData(noteData)
        console.log(noteFormData)
        setShowForm(true)
    }

    function closeForm() {
        setShowForm(false)
    }

    return (
    <>
    {showForm && <div className="absolute z-10 top-0 left-0 w-full h-full
        bg-black bg-opacity-60 flex justify-center items-center">
        <NoteForm onCloseModal={closeForm} noteData={noteFormData} />
    </div>}
    <div className="px-[3%]">
        <h1 className="text-center text-2xl pt-5">Notas y escritura</h1>
        <div className="grid grid-cols-2 gap-8 mt-5">
            <div className="flex justify-end">
                <button
                onClick={openForm}
                className="py-1 px-5 bg-light-orange rounded-md
                font-bold hover:bg-orange transition-all"
                >+ Nueva Nota</button>
            </div>
            <div>
                <input 
                className="py-1 px-3 transition-all w-40 rounded-md outline-none 
                focus:border-b-2 border-black focus:-mb-0.5 focus:w-56"
                placeholder="Buscar..." />
            </div>
        </div>
        <div className="w-full flex gap-8 px-8 mt-5
        justify-center">
            {screenWidth > 764 && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={notesData} />
                <NotesTile onOpenNote={openFormFromNote} notes={notesData} />
                <NotesTile onOpenNote={openFormFromNote} notes={notesData} />
                </>
            }
            {(screenWidth > 550 && screenWidth <= 764) && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={notesData} />
                <NotesTile onOpenNote={openFormFromNote} notes={notesData} />
                </>
            }
            {(screenWidth <= 550) && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={notesData} />
                </>
            }
        </div>
    </div>
    </>
    )
}

export default NotesPage