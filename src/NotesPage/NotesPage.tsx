import React, { useEffect, useRef, useState } from "react"
import NoteForm from "./NoteForm"
import NotesTile from "./NotesTile/NotesTile"

export type Note = {
id: number,
title: string,
body: string
}

const NotesPage: React.FC = (props) => {
    const blurRef= useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    //variable used when opening the form from a note, and not 
    // to create a new one
    const [noteFormData, setNoteFormData] = useState<Note|undefined>(undefined)
    const [notesData, setNotesData]= useState<Note[]>(JSON.parse(localStorage.getItem('notesArray') || '[]'))
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

    useEffect(() => {
        localStorage.setItem('notesArray', JSON.stringify(notesData))
    }, [notesData])

    function openForm() {
        setNoteFormData(undefined)
        setShowForm(true)
    }

    function openFormFromNote(noteData: Note) {
        setNoteFormData(noteData)
        setShowForm(true)
    }

    function editNote(editedNote: Note) {
        setNotesData(prevNotes => {
            const noteIndex = prevNotes.findIndex(note => note.id === editedNote.id)
            prevNotes.splice(noteIndex, 1, editedNote)
            return prevNotes
        })
        setShowForm(false)
    }

    function addNote(title: string, body: string) {
        const nextId = (Math.max(...notesData.map((note: Note) => note.id), 0))+1
        setNotesData(prevNotes => prevNotes.concat({
            id:nextId,
            title,
            body
        }))
        setShowForm(false)
    }

    function deleteNote(id: number) {
        setNotesData(prevNotes => prevNotes.filter(note => note.id !== id))
        setShowForm(false)
    }

    function checkModalBlur(e: React.MouseEvent<HTMLDivElement>) {
        if(e.target === blurRef.current) setShowForm(false)
    }

    function searchNotes() {
        if(searchInputRef.current?.value === '') {
            
        }
    }

    return (
    <>
    {showForm && <div onClick={checkModalBlur} ref={blurRef}
    className="absolute z-10 top-0 left-0 w-full h-full
        bg-black bg-opacity-60 flex justify-center items-center">
        <NoteForm 
        onDeleteNote={deleteNote}
        onAddNote={addNote}
        onEditNote={editNote}
        noteFormData={noteFormData} />
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
                ref={searchInputRef}
                onChange={searchNotes}
                className="py-1 px-3 transition-all w-40 rounded-md outline-none 
                border-b-2  focus:border-black focus:w-56"
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