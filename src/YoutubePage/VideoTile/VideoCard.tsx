

const VideoCard: React.FC<{data: any}> = (props) => {

    return (
        <div className="flex flex-col bg-white rounded-md">
            <div>
                <iframe id="ytplayer" className="w-full aspect-video"
                src={`http://www.youtube.com/embed/${props.data.id.videoId}`}/>
            </div>
            <div className="p-3 mt-1">
                <p className="font-bold text-lg mb-2 w-full overflow-hidden">{props.data.snippet.title}</p>
                <a
                href={`https://www.youtube.com/watch?v=${props.data.id.videoId}`}
                target="_blank"
                className="text-blue-600 w-full overflow-hidden">{props.data.snippet.channelTitle}</a>
            </div>
        </div>
    )
}

export default VideoCard