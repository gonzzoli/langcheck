

const NewsCard: React.FC<{data: any}> = (props) => {
    const textHeight = 150 + Math.floor(Math.random()*300)
    const title = props.data.querySelector('title').textContent
    const originalLink = props.data.querySelector('link').textContent
    // Article body without the html tags. Could be better if transformed to HTML
    // but had styling issues with tailwind. No way for now to acces the tags inside
    // the generated HTML
    const articleBody = 
    props.data.querySelector('description').textContent.replace(/<.+?>/g, '')

    return (
    <div className="p-3 flex flex-col rounded-md
    bg-white shadow-md">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <a 
        className="text-blue-600 underline 
        hover:text-blue-900 mb-1"
        target='_blank' 
        href={originalLink}>
            O globo</a>
        <div 
        style={{
            maxHeight: textHeight + 'px'
        }}
        className="mb-1 overflow-hidden"
        >
        {articleBody}
        </div>
        <p className="text-orange 
        hover:text-amber-700
        transition-all cursor-pointer">Leer mas...</p>
    </div>
    )
}

export default NewsCard