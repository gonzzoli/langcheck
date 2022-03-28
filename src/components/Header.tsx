
const Header: React.FC = () => {
    return (
    <header className="bg-orange h-16 
    flex justify-between px-8 items-center">
        <h2 className="text-3xl tracking-wider">Lang 
        <span className="text">Check</span>
        </h2>
        <nav>
            {/* <ul className="flex justify-center
             items-center gap-10 text-xl pr-5">
                <li>Ajustes</li>
                <li>Cerrar Sesion</li>
            </ul> */}
        </nav>
    </header>
    )
}

export default Header