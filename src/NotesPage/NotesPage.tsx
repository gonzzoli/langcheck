import NotesTile from "./NotesTile/NotesTile"

export type Note = {
id: number,
title: string,
body: string
}

const dummyNotes: Note[] = [
    {
        id: 1,
        title: 'Lo que hice ayer',
        body: `Ayer me desperte como a las 7 de la mañana y me levante de la cama saltando, porque era un gran dia sin dudas. Fui al baño, comi una banana y sali a correr. 
        Cuando volvi me bañe y dije, buena que onda las noticias re loco todo lo de ucrania y aparte como iba a saber yo que tenia que cocinar todo un festin para cuando llegara mi familia y lorem ipsummasdas. `
    },
    {
        id: 2,
        title: 'Lo que pienso hacer mañana',
        body: `Ayer me desperte como a las 7 de la mañana y me levante de la cama saltando, porque era un gran dia sin dudas. Fui al baño, comi una banana y sali a correr. 
        Cuando volvi me bañe y dije, buena que ondaCuando volvi me bañe y dije, buena que onda las noticias
        Cuando volvi me bañe y dije, buena que onda las noticias las noticias re loco todo lo de ucrania y aparte como iba a saber yo que tenia que cocinar todo un festin para cuando llegara mi familia y lorem ipsummasdas. `
    },
    {
        id: 3,
        title: 'tatat atata ice ayer',
        body: `Ayer a y me levante de la cama saltando, porque era un gran dia sin dudas. Fui al baño, comi una banana y sali a correr. 
        Cuando volvi me bañe y dije, buena que onda las noticias re loco todo lo de ucrania y aparte como iba a saber yo que tenia que cocinar todo un festin para cuando llegara mi familia y lorem ipsummasdas. `
    },
]

const NotesPage: React.FC<{onShowModal: (modalName: string) => void}> = (props) => {
    const notesData: Note[] = JSON.parse(localStorage.getItem('notesArray') || '[]')
    
    function showModal() {
        props.onShowModal('NoteForm')
    }

    return (
    <>
        <h1 className="text-center text-2xl mt-5">Notas y escritura</h1>
        <div className="grid grid-cols-2 gap-8 mt-5">
            <div className="flex justify-end">
                <button
                onClick={showModal}
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
            <NotesTile notes={notesData} />
            <NotesTile notes={notesData} />
            <NotesTile notes={notesData} />
        </div>
    </>
    )
}

export default NotesPage