import { useState, useEffect, useContext } from 'react'
import { LangContext } from '../store/lang-context'
import NewsTile from './NewsTile/NewsTile'

const rssLinks = [
    {
        lang: 'spanish',
        link: 'https://www.metroworldnews.com/arc/outboundfeeds/rss/?outputType=xml'
    },
    {
        lang: 'portuguese',
        link: 'https://oglobo.globo.com/rss.xml?completo=true'
    }
]

function NewsPage() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [articles, setArticles] = useState<Element[]>([])
    const [loading, setLoading] = useState(false)
    const langCtx = useContext(LangContext)
    
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
        // not using yet, having cors problems and many rss 
        // just don't give full articles
        const rssLink = langCtx.selectedLang === 'spanish' ? rssLinks[0].link : rssLinks[1].link
        async function getArticles() {
            const req = await fetch('https://oglobo.globo.com/rss.xml?completo=true')
            const res = await req.text()
            const data = new window.DOMParser().parseFromString(res, 'text/xml')
            return data
        }
        setLoading(true)
        getArticles()
        .then(data => {
            const fetchedArticles = Array.from(data.querySelectorAll('item'))
            setLoading(false)
            setArticles(fetchedArticles)
        })
    }, [langCtx.selectedLang])

    return (
    <>
        <div className="px-[3%]">
            <h1 className="text-center text-2xl mt-5">Noticias y articulos</h1>
            <div className="w-full flex gap-8 px-8 mt-5
            justify-center relative">
                {loading && <p className='text-xl'>Cargando tus articulos...</p>}
                {screenWidth > 764 && 
                    <>
                    <NewsTile articles={articles.slice(0, 2)} />
                    <NewsTile articles={articles.slice(3, 5)} />
                    <NewsTile articles={articles.slice(6, 9)} />
                    </>
                }
                {(screenWidth > 550 && screenWidth <= 764) && 
                    <>
                    <NewsTile articles={articles.slice(0, 4)} />
                    <NewsTile articles={articles.slice(5, 9)} />
                    </>
                }
                {(screenWidth <= 550) && 
                    <>
                    <NewsTile articles={articles.slice(0, 9)} />
                    </>
                }
            </div>
        </div>
    </>
    )
}

export default NewsPage