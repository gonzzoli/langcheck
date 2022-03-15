import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGraduationCap, faMusic, faNewspaper, faNoteSticky, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation} from 'react-router-dom'
import Flags from 'country-flag-icons/react/3x2'
import { useContext, useState } from 'react'
import { LangContext } from '../store/lang-context'

const icons = [
    // {icon: faGraduationCap, page: 'lessons'},
    {icon: faNewspaper, page: 'articles'},
    {icon: faNoteSticky, page: 'notes'},
    {icon: faMusic, page: 'music'},
    // {icon: faComment, page: 'chat'},
    {icon: faYoutube, page: 'videos'},
    // {icon: faVideoCamera, page: 'recording'}
]

const LangFlags = [
    {
        lang: 'spanish',
        flagElem: <Flags.ES title='Español' />
    },
    {
        lang: 'english',
        flagElem: <Flags.GB title='English' />
    },
    {
        lang: 'portuguese',
        flagElem: <Flags.BR title='Português' />
    }
]

const Sidebar: React.FC = () => {
    const [showFlags, setShowFlags] = useState(false)
    const url = useLocation()
    const currentPage = url.pathname.slice(1)
    const langCtx = useContext(LangContext)

    function toggleFlags() {
        setShowFlags(prevState => !prevState)
    }

    function changeLang(lang: string) {
        langCtx.changeLang(lang)
        setShowFlags(false)
    }

    return (
        <div className='w-14 h-full flex flex-col flex-none
        bg-white'>
            <div 
            onClick={toggleFlags}
            className='w-full flex justify-center transition-all bg-white
            items-center px-1 py-3 hover:bg-slate-200 cursor-pointer'>
                {/*Finds the flag of the current language */}
                {LangFlags.find(flag => flag.lang === langCtx.selectedLang)?.flagElem}
            </div>
            {showFlags && LangFlags.filter(flag => flag.lang !== langCtx.selectedLang)
                .map(flag => {
                    return <div key={flag.lang}
                    onClick={()=>{changeLang(flag.lang)}}
                    className='w-full flex justify-center transition-all bg-white
                    items-center px-1 py-3 hover:bg-slate-200 cursor-pointer'>
                        {/*Finds the flag of the current language */}
                        {flag.flagElem}
                    </div>
                })} 
            {icons.map(button => 
            <Link to={`/${button.page}`} key={button.page}>
                {/* Check if we are in that page and add the bg color */}
                <div 
                className={button.page === currentPage ?
                `w-full flex justify-center transition-all
                items-center py-5 bg-slate-200 cursor-pointer`
                : 
                `w-full flex justify-center transition-all bg-white
                items-center py-5 hover:bg-slate-200 cursor-pointer`}>
                    <FontAwesomeIcon className='text-xl' icon={button.icon} />
                </div>
            </Link>
            )}
        </div>
    )
}

export default Sidebar