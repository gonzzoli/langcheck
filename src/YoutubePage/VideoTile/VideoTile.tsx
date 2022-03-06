import VideoCard from "./VideoCard"


const VideoTile: React.FC<{videos: any}> = (props) => {
    console.log(props.videos)
    return (
        <div className="flex flex-col w-1/2 gap-8">
            {props.videos.map((video: any) => <VideoCard key={video.id.videoId} data={video} />)}
        </div>
    )
}

export default VideoTile