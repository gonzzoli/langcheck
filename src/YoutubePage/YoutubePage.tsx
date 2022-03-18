import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { LangContext } from "../store/lang-context"
import VideoTile from "./VideoTile/VideoTile"

type Video = {
    videoId: string,
    videoTitle: string,
    channelId: string,
    channelTitle: string
}

const channelIds: {[key: string]: string[]} = {
    portuguese: ['UCH2VZQBLFTOp6I_qgnBJCuQ', 'UCEWHPFNilsT0IfQfutVzsag', 'UCCJ9Shh3w90o4LawLcOQ3Bg', 'UCj0O6W8yDuLg3iraAXKgCrQ', 'UCPHXtOVmjvbP9OJihsd7gCg'],
    french: ['UCI4xp8qHD1MDErkqxb1dPbA', 'UCbj8Qov-9b5WTU1X4y7Yt-w', 'UC9n76QPNgx_C6lm8vK7ltpQ', 'UCi7MkdJLwvV99438YeUhZeg', 'UC57J0rAl1Ist28Ln2bVji0Q'],
    spanish: ['UCTJTpwrK4a-ajXs4-Wry09A', 'UCcjIvuxmWlS5IEQ0JdPV4Ng', 'UCouyFdE9-Lrjo3M_2idKq1A', 'UC6jNDNkoOKQfB5djK2IBDoA', 'UCECJDeK0MNapZbpaOzxrUPA'],
    english: ['UCAQg09FkoobmLquNNoO4ulg', 'UC32mYgIHS-e3C3Eyd2tRw6g', 'UCB-Ps5DdRsVAcml-Y43o7RQ', 'UCQ4zIVlfhsmvds7WuKeL2Bw', 'UCZbOmMsPgxuWmj5pGymAOnA']
}

function YoutubePage() {
    const [videosData, setVideosData] = useState<Video[]>([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [loading, setLoading] = useState(false)
    const selectedLang = useContext(LangContext).selectedLang

    useEffect(() => {
        function shuffleVideos(videos: Video[]) {
            // just shuffles the videos a bit so there aren't 10 vids
            // from each channel all together
            const videosCopy = [...videos]
            return videosCopy.sort((a: Video,b: Video) => Math.random() - 0.5)
        }

        async function getData(id: string) {
            const req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=10&key=AIzaSyBacW66axNYsM1lgtQxC4P1loX5IE_5lpU`)
            const res = await req.json()
            return res.items.map((video: any) => {
                return {
                    videoId: video.id.videoId,
                    videoTitle: video.snippet.title,
                    channelId: video.snippet.channelId,
                    channelTitle: video.snippet.channelTitle
                }
            })
        }
        setLoading(true)

        //gets 10 videos from each channel and gets them all together shuffled
        Promise.all(channelIds[selectedLang].map(id => getData(id)))
        .then(data => {
            console.log(data)
            setVideosData(shuffleVideos(data.flat(1)))
            setLoading(false)   
        })
        .catch(err => console.log(err))
    }, [selectedLang])

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


    function filterVideos(colNumber: number, totalCols: number) {
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
                <VideoTile videos={filterVideos(0, 3)} />
                <VideoTile videos={filterVideos(1, 3)} />
                <VideoTile videos={filterVideos(2, 3)} />
                </>
            }
            {(screenWidth > 550 && screenWidth <= 764) && 
                <>
                <VideoTile videos={filterVideos(0, 2)} />
                <VideoTile videos={filterVideos(1, 2)} />
                </>
            }
            {(screenWidth <= 550) && 
                <VideoTile videos={filterVideos(0, 1)} />
            }
            </div>
        </div>
    )
}

export default YoutubePage