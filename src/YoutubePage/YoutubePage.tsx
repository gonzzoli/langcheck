import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import VideoTile from "./VideoTile/VideoTile"


function YoutubePage() {
    const [videosData, setVideosData] = useState<any>([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        // As this triggers a re-render on each resize, each NewsCard
        // calculates the text height again, causing some extra calculations
        // not expensive anyways, but not the best visuals when resizing.
        // You can see the text resizing a lot. should fix that later
        function updateWidth() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, [])
    useEffect(() => {
        async function getData() {
            const req = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=rating&regionCode=BR&type=video&key=AIzaSyBacW66axNYsM1lgtQxC4P1loX5IE_5lpU')
            const res = await req.json()
            setLoading(false)
            return res.items
        }
        setLoading(true)
        getData()
        .then(data => setVideosData(data))
        .catch(error => console.log(error))
    }, [])

    function orderVideos(colNumber: number, totalCols: number) {
        // filter the videos by the column they are being sent
        return videosData.filter((video: any, index: number) => {
            return (index - colNumber) % totalCols === 0
        })
    }

    return (
        <div className="px-[3%]">
            <h1 className="text-center text-2xl pt-5">Videos</h1>
            
            {loading && 
            <div className="flex justify-center items-center mt-52">
            <FontAwesomeIcon
            className="text-4xl animate-spin-slow"
            icon={faSpinner} />
            </div>}

            <div className="flex gap-8 mt-8 justify-center">
            {screenWidth > 764 && 
                <>
                <VideoTile videos={orderVideos(0, 3)} />
                <VideoTile videos={orderVideos(1, 3)} />
                <VideoTile videos={orderVideos(2, 3)} />
                </>
            }
            {(screenWidth > 550 && screenWidth <= 764) && 
                <>
                <VideoTile videos={orderVideos(0, 2)} />
                <VideoTile videos={orderVideos(1, 2)} />
                </>
            }
            {(screenWidth <= 550) && 
                <>
                <VideoTile videos={orderVideos(0, 1)} />

                </>
            }
            </div>
        </div>
    )
}

export default YoutubePage