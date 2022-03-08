import { useState } from "react"
import { musicData, Song } from "./music-data"


function MusicPage() {
    const [trackPlaying, setTrackPlaying] = useState<Song>(musicData.french[0])

    function changeTrack(track: Song) {
        setTrackPlaying(track)
    }

    return (
<div className="px-[3%] pb-5">
    <h1 className="text-center text-2xl pt-5">Music</h1>
    <div className="mt-8 flex gap-8">
        <div className="w-1/2">
            <iframe src={`https://open.spotify.com/embed/track/${trackPlaying.id}?utm_source=generator`}
            className="w-full bg-black max-w-lg h-[80px] rounded-t-md"
            frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <div className="bg-white rounded-b-md max-w-lg max-h-72 overflow-y-scroll">
                {musicData.french.map(song => {
                    return (
                        <>
                        <div
                        onClick={() => {changeTrack(song)}}
                        className="flex justify-between items-center p-2
                        hover:bg-slate-200 transition-all cursor-pointer">
                            <span className="w-1/3 whitespace-nowrap overflow-hidden">{song.name}</span>
                            <span className="w-1/3 whitespace-nowrap overflow-hidden justify-center flex">{song.artist}</span>
                            <span className="w-1/3 whitespace-nowrap overflow-hidden flex justify-end">{song.duration}</span>
                        </div>
                        <hr></hr>
                        </>
                    )
                })}
            </div>
        </div>
        <div className="w-1/2 bg-slate-50 rounded-md p-3 ">
            {trackPlaying.lyrics.split('|').map(line => <span key={Math.random()} className="block">{line}</span>)}
        </div>
    </div>
</div>
    )
}

export default MusicPage