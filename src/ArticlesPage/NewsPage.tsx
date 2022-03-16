import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { LangContext } from '../store/lang-context'
import NewsTile from './NewsTile/NewsTile'

const rssLinks = [
    {
        lang: 'spanish',
        links: ['https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada']
    },
    {
        lang: 'portuguese',
        links: ['https://oglobo.globo.com/rss.xml?completo=true']
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
        // whenever language changes, we empty the articles array
        // and fill it up with new info

        const endpoints = langCtx.selectedLang === 'spanish' ? rssLinks[0].links : rssLinks[1].links

        async function getArticles(endpoint: string) {
            const req = await fetch(endpoint)
            const res = await req.text()
            const data = new window.DOMParser().parseFromString(res, 'text/xml')
            setLoading(false)
            return data
        }
        setLoading(true)

        const promiseArr = endpoints.map(endpoint => getArticles(endpoint))

        // make all the requests and then set the articles
        Promise.all(promiseArr)
        .then(data => {
            const fetchedArticles: Element[] = []
            data.forEach(newspaper => 
                fetchedArticles.push(...Array.from(newspaper.querySelectorAll('item'))))
            setArticles(fetchedArticles)
        })
        .catch(err => console.log(err))


    }, [langCtx.selectedLang])

    useEffect(() => {
        console.log(articles)
    }, [articles])

    return (
    <>
        <div className="px-[3%]">
            <h1 className="text-center text-2xl mt-5">Noticias y articulos</h1>
            
            {loading  && 
            <div className="flex justify-center items-center mt-52">
            <FontAwesomeIcon
            className="text-4xl animate-spin-slow"
            icon={faSpinner} />
            </div>}
            {!loading && 
            <div className="w-full flex gap-8 px-8 mt-5
            justify-center relative">
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
            </div>}
        </div>
    </>
    )
}

export default NewsPage