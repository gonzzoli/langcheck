

const VideoCard: React.FC<{data: any}> = (props) => {

    return (
        <div className="flex flex-col bg-white rounded-md">
            <div>
                <iframe id="ytplayer" className="w-full aspect-video"
                allowFullScreen
                src={`http://www.youtube.com/embed/${props.data.videoId}`}/>
            </div>
            <div className="p-3 mt-1">
                <p className="font-bold text-lg mb-2 w-full overflow-hidden">{props.data.videoTitle}</p>
                <a
                href={`https://www.youtube.com/watch?v=${props.data.videoId}`}
                target="_blank"
                className="text-blue-600 w-full overflow-hidden">{props.data.channelTitle}</a>
            </div>
        </div>
    )
}

export default VideoCard