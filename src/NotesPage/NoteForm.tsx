import { useContext, useEffect, useRef, useState } from "react"
import { LangContext } from "../store/lang-context"
import { Note } from "./NotesPage"


const formText: {[key: string]: {
    titlePlaceholder: string,
    notePlaceholder: string,
    save: string,
    delete: string,
    setTitle: string
}} = {
    spanish: {
        titlePlaceholder: 'Título',
        notePlaceholder: 'Tu nota',
        save: 'Guardar',
        delete: 'Eliminar',
        setTitle: 'Pon un título al menos'
    },
    portuguese: {
        titlePlaceholder: 'Título',
        notePlaceholder: 'Sua nota',
        save: 'Salvar',
        delete: 'Remover',
        setTitle: 'Coloque pelo menos um título'
    },
    english: {
        titlePlaceholder: 'Title',
        notePlaceholder: 'Your note',
        save: 'Save',
        delete: 'Delete',
        setTitle: 'Set a title at least'
    },
    french: {
        titlePlaceholder: 'Titre',
        notePlaceholder: 'Votre note',
        save: 'Sauvegarder',
        delete: 'Retirer',
        setTitle: 'Mettre au moins un titre'
    }
}

const NoteForm: React.FC<{
    noteFormData: Note | undefined,
    onEditNote: (note: Note)=>void,
    onDeleteNote: (id: number)=>void,
    onAddNote: (title: string, body: string)=>void
    }> = (props) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLTextAreaElement>(null)
    const [showError, setShowError] = useState(false)
    const selectedLang = useContext(LangContext).selectedLang

    function saveNote() {
        //checks if there's input on either field
        if(titleRef.current?.value === '' && bodyRef.current?.value === ''){
            setShowError(true)
            return
        }

        if(props.noteFormData) {
            // if the form received noteFormData, then it can only be editing
            // a note, else, it is adding a new one
            props.onEditNote({
                id: props.noteFormData!.id,
                title: titleRef.current!.value,
                body: bodyRef.current!.value
            })
        } else {
            props.onAddNote(
                titleRef.current!.value,
                bodyRef.current!.value)
        }
        
    }

    function checkTitle() {
        if(titleRef.current?.value.length === 0) return
        setShowError(false)
    }

    function deleteNote() {
        props.onDeleteNote(props.noteFormData!.id)
    }

    useEffect(() => {
        if(props.noteFormData) {
            // if it receives noteFormData, then it's editing a note,
            // so we set that note values as initial values on the fields
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
            placeholder={`${formText[selectedLang].titlePlaceholder}...`} />
            {showError && <p className="text-red-500 p-1 pb-0 text-sm">{formText[selectedLang].setTitle}!</p>}
            <hr className="my-2"></hr>
            <textarea
            ref={bodyRef} 
            className="resize-none w-full outline-none transition-all
            rounded-md focus:border-b-2 border-orange focus:-mb-0.5 p-1
            h-80"
            placeholder={`${formText[selectedLang].notePlaceholder}...`} />
            <div className="flex justify-between items-center">
                {props.noteFormData && <button
                onClick={deleteNote}
                className="py-1 px-4 text-red-600 bg-red-100
                hover:bg-red-200 transition-all rounded-md mt-2 ml-0">
                {formText[selectedLang].delete}</button> }
                <button
                onClick={saveNote}
                className="py-1 px-4 bg-light-orange
                hover:bg-orange transition-all rounded-md mt-2 ml-0">
                {formText[selectedLang].save}</button>
            </div>
        </div>
    )
}

export default NoteForm