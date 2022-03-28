import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { LangContext } from '../store/lang-context'
import NewsTile from './NewsTile/NewsTile'

// const rssLinks = [
//     {
//         lang: 'spanish',
//         links: ['https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada']
//     },
//     {
//         lang: 'portuguese',
//         links: ['https://oglobo.globo.com/rss.xml?completo=true']
//     }
// ]

const pageText: {[key: string]: {title: string, error: string}} = {
    spanish: {
        title: 'Noticias y artículos',
        error: 'No pudimos encontrar la informacion.'
    },
    portuguese: {
        title: 'Noticias e artigos',
        error: 'A informação não foi encontrada.'
    },
    english: {
        title: 'News and articles',
        error: 'We couldn`t find the information.'
    },
    french: {
        title: 'Nouvelles et articles',
        error: 'Nous n`avons pas pu trouver l`information.'
    }
}

const rssLinks = [
    {
        lang: 'spanish',
        links: [
            {newspaper: 'El Pais', link: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada'}
        ]
    },
    {
        lang: 'portuguese',
        links: [
            {newspaper: 'O Globo', link: 'https://oglobo.globo.com/rss.xml?completo=true'}
        ]
    },
    {
        lang: 'english',
        links: [
            {newspaper: 'The News Stateman', link: 'https://www.newstatesman.com/feed'}
        ]
    },
    {
        lang: 'french',
        links: [
            {newspaper: 'frances', link: 'https://www.mediapart.fr/articles/feed?userid=33867bcf-c0e2-4c54-ab19-65f786ea276d'}
        ]
    }
]

function NewsPage() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [articles, setArticles] = useState<{newspaper: string, item: Element}[]>([])
    const [loading, setLoading] = useState(false)
    const [fetchError, setFetchError] = useState(false)
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

        //const endpoints = langCtx.selectedLang === 'spanish' ? rssLinks[0].links : rssLinks[1].links
        const endpoints = rssLinks.find(links => links.lang === langCtx.selectedLang)?.links || rssLinks[0].links

        async function getArticles({newspaper, link}: {newspaper: string, link: string}) {
            const req = await fetch(link)
            const res = await req.text()
            const data = new window.DOMParser().parseFromString(res, 'text/xml')
            const items = data.querySelectorAll('item')
            setLoading(false)
            return {
                itemsList: items,
                newspaper
            }
        }
        setLoading(true)
        setFetchError(false)
        const promiseArr = endpoints.map(endpoint => getArticles(endpoint))

        // make all the requests and then set the articles
        Promise.all(promiseArr)
        // will return an array like [{itemsData: alltheitemsasxml, newspaper: name}, ...

        .then(data => {
            const fetchedArticles: {item: Element, newspaper: string}[] = []
            data.forEach(newsArticles => {
                // articles of one paper
                const items = Array.from(newsArticles.itemsList)
                .map(item => {
                    return {newspaper: newsArticles.newspaper, item}
                })
                fetchedArticles.push(...items)
            })
            setArticles(fetchedArticles)
        })
        .catch(err => {
            setLoading(false)
            setFetchError(true)
        })


    }, [langCtx.selectedLang])

    return (
    <>
        <div className="px-[3%]">
            <h1 className="text-center text-2xl mt-5">{pageText[langCtx.selectedLang].title}</h1>
            
            {loading  && 
            <div className="flex justify-center items-center mt-52">
            <FontAwesomeIcon
            className="text-4xl animate-spin-slow"
            icon={faSpinner} />
            </div>}
            {!loading && 
            <div className="w-full flex gap-8 px-8 mt-5
            justify-center relative">
                {fetchError && <p className='text-red-500 text-lg text-center'>{pageText[langCtx.selectedLang].error}</p>}
                {!fetchError && screenWidth > 764 && 
                    <>
                    <NewsTile articles={articles.slice(0, 2)} />
                    <NewsTile articles={articles.slice(3, 5)} />
                    <NewsTile articles={articles.slice(6, 9)} />
                    </>
                }
                {!fetchError && screenWidth > 550 && screenWidth <= 764 && 
                    <>
                    <NewsTile articles={articles.slice(0, 4)} />
                    <NewsTile articles={articles.slice(5, 9)} />
                    </>
                }
                {!fetchError && screenWidth <= 550 && 
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