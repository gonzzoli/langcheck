import { useEffect, useState } from "react"
import VideoTile from "./VideoTile/VideoTile"


function YoutubePage() {
    const [videosData, setVideosData] = useState<any>([])

    useEffect(() => {
        async function getData() {
            console.log('caca')
            const req = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=BR&key=AIzaSyBacW66axNYsM1lgtQxC4P1loX5IE_5lpU')
            const res = await req.json()
            return res.items
        }
        getData()
        .then(data => setVideosData(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="px-[3%]">
            <h1 className="text-center text-2xl pt-5">Videos</h1>
            <div className="flex gap-8 mt-8">
                <VideoTile videos={videosData} />
                <VideoTile videos={videosData} />
            </div>
        </div>
    )
}

export default YoutubePage