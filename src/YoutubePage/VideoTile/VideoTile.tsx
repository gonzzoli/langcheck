import VideoCard from "./VideoCard"


const VideoTile: React.FC<{videos: any}> = (props) => {
    console.log(props.videos)
    return (
        <div className="flex flex-col w-1/3 mdsm:w-1/2 sm:w-full gap-8">
            {props.videos.map((video: any) => <VideoCard key={video.videoId} data={video} />)}
        </div>
    )
}

export default VideoTile