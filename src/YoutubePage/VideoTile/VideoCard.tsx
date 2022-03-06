

const VideoCard: React.FC<{data: any}> = (props) => {
    console.log(props.data)
    return (
        <div className="flex flex-col bg-white rounded-md">
            <div>
                <iframe id="ytplayer" className="w-full aspect-video"
                src={`http://www.youtube.com/embed/${props.data.id.videoId}`}/>
            </div>
            <div className="p-3 mt-1">
                <p className="font-bold text-lg mb-2">{props.data.snippet.title}</p>
                <p className="text-blue-600">{props.data.snippet.channelTitle}</p>
            </div>
            
        </div>
    )
}

export default VideoCard