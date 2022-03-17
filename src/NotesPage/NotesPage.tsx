import React, { useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { LangContext } from "../store/lang-context"
import NoteForm from "./NoteForm"
import NotesTile from "./NotesTile/NotesTile"

export type Note = {
id: number,
title: string,
body: string
}

type NotesData = {
    [key: string]: Note[],
    english: Note[], 
    spanish: Note[], 
    portuguese: Note[]
}

const emptyNotes: NotesData = {
    english: [],
    spanish: [],
    portuguese: []
}


const NotesPage: React.FC = (props) => {
    const blurRef= useRef<HTMLDivElement>(null)
    const selectedLang = useContext(LangContext).selectedLang
    //variable used when opening the form from a note, and not 
    // to create a new one
    const [noteFormData, setNoteFormData] = useState<Note|undefined>(undefined)
    const [notesData, setNotesData] = useState<NotesData>(JSON.parse(localStorage.getItem('notes') || JSON.stringify(emptyNotes)))

    //const [notesData, setNotesData]= useState<Note[]>(JSON.parse(localStorage.getItem('notesArray') || '[]'))
    const [searchInput, setSearchInput] = useState('')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {

        // As this triggers a re-render on each resize, each NewsCard
        // calculates the text height again, causing some extra calculations
        // not expensive anyways, but not the best visuals when resizing.
        // You can see the text resizing a lot. should fix that later
        function updateWidth() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, [])

    useEffect(() => {
        // All changes to the notes state end up in a localStorage update
        console.log(notesData)
        localStorage.setItem('notes', JSON.stringify(notesData))
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
            const noteIndex = prevNotes[selectedLang].findIndex(note => note.id === editedNote.id)
            prevNotes[selectedLang].splice(noteIndex, 1, editedNote)
            return prevNotes
        })
        setShowForm(false)
    }
    
    function addNote(title: string, body: string) {
        console.log('adding: ', title)

        const nextId = (Math.max(...notesData[selectedLang].map((note: Note) => note.id), 0))+1
        
        setNotesData(prevNotes => (
            {
                ...prevNotes,
                [selectedLang]: [
                    ...prevNotes[selectedLang], 
                    {id:nextId,
                    title,
                    body}
                ]
            }
        ))
        setShowForm(false)
        setSearchInput('')
    }

    function deleteNote(id: number) {
        setNotesData(prevNotes => {
            prevNotes[selectedLang] = prevNotes[selectedLang].filter(note => note.id !== id)
            return prevNotes
        })
        setShowForm(false)
    }

    function checkModalBlur(e: React.MouseEvent<HTMLDivElement>) {
        if(e.target === blurRef.current) setShowForm(false)
    }

    function filterNotes(colNumber: number, totalCols: number) {
        // first filters the notes by the search input
        const filteredSearchNotes = notesData[selectedLang].filter(note => note.title.includes(searchInput) || note.body.includes(searchInput))
        // then filter the notes by the column they are being sent
        return filteredSearchNotes.filter((note, index) => {
            return (index - colNumber) % totalCols === 0
        })
    }

    return (
    <>
    {showForm && createPortal(<div onClick={checkModalBlur} ref={blurRef}
    className="absolute z-10 top-0 left-0 w-full h-full
        bg-black bg-opacity-60 flex justify-center items-center">
        <NoteForm 
        onDeleteNote={deleteNote}
        onAddNote={addNote}
        onEditNote={editNote}
        noteFormData={noteFormData} />
    </div>, document.getElementById('modal-portal')!)}
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="py-1 px-3 transition-all w-40 rounded-md outline-none 
                border-b-2  focus:border-black focus:w-56"
                placeholder="Buscar..." />
            </div>
        </div>
        <div className="w-full flex gap-8 px-8 mt-5
        justify-center">
            {screenWidth > 950 && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(0, 4)} />
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(1, 4)} />
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(2, 4)} />
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(3, 4)} />
                </>
            }
            {screenWidth > 764 && screenWidth <= 950 && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(0, 3)} />
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(1, 3)} />
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(2, 3)} />
                </>
            }
            {(screenWidth > 550 && screenWidth <= 764) && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(0, 2)} />
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(1, 2)} />
                </>
            }
            {(screenWidth <= 550) && 
                <>
                <NotesTile onOpenNote={openFormFromNote} notes={filterNotes(0, 1)} />
                </>
            }
        </div>
    </div>
    </>
    )
}

export default NotesPage