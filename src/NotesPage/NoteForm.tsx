

const NoteForm: React.FC = (props) => {
    return (
        <div className="p-2 bg-white rounded-md w-2/3 max-w-xl">
            <input
            className="w-full outline-none transition-all
            rounded-md focus:border-b-2 border-black focus:-mb-0.5
            font-bold p-1"
            placeholder="Titulo..." />
            <hr className="my-2"></hr>
            <textarea 
            className="resize-none w-full outline-none transition-all
            rounded-md focus:border-b-2 border-orange focus:-mb-0.5 p-1
            h-80"
            placeholder="Tu nota..." />
            <div className="flex justify-between items-center">
                <button
                className="py-1 px-4 text-red-600 bg-red-100
                hover:bg-red-200 transition-all rounded-md mt-2 ml-0">
                Cancelar</button>
                <button
                className="py-1 px-4 bg-light-orange
                hover:bg-orange transition-all rounded-md mt-2 ml-0">
                Guardar</button>
            </div>
        </div>
    )
}

export default NoteForm