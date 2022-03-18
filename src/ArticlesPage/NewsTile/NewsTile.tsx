import NewsCard from "./NewsCard"

const NewsTile: React.FC<{articles: {newspaper: string, item: Element}[]}> = (props) => {

    return (
        <div className="flex 
        flex-col shrink-0
        gap-8 w-1/3 mdsm:w-1/2 sm:w-full">
            {props.articles.map(article => <NewsCard key={Math.random()} data={article} />)}
        </div>
    )
}

export default NewsTile