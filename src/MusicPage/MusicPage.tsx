import { useContext, useState } from "react"
import { LangContext } from "../store/lang-context"
import { musicData, Song } from "./music-data"

const pageTitle: {[key: string]: string} = {
    spanish: 'Música',
    portuguese: 'Música',
    english: 'Music',
    french: 'Musique'
}

function shufflePlaylist(list: Song[]) {
    const copy = [...list]
    return copy.sort((a,b) => Math.random() - 0.5)
}

function MusicPage() {
    const [trackPlaying, setTrackPlaying] = useState<Song>(musicData.french[0])
    const selectedLang = useContext(LangContext).selectedLang

    function changeTrack(track: Song) {
        setTrackPlaying(track)
    }

    return (
<div className="px-[3%] pb-5 ">
    <h1 className="text-center text-2xl pt-5">{pageTitle[selectedLang]}</h1>
    <div className="mt-8 flex gap-8 mdsm:flex-col">
        <div className="w-1/2 flex flex-col items-center mdsm:w-full">
            <iframe src={`https://open.spotify.com/embed/track/${trackPlaying.id}?utm_source=generator`}
            className="w-full bg-black max-w-lg h-[80px] rounded-t-md"
            frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <div className="bg-white rounded-b-md w-full max-w-lg 
            max-h-72 overflow-y-scroll pr-3
            scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-white">
                {shufflePlaylist(musicData[selectedLang]).map(song => {
                    return (
                        <div
                        key={song.id}
                        onClick={() => {changeTrack(song)}}
                        className="border-b-2
                        flex justify-between items-center p-2
                        hover:bg-slate-200 transition-all cursor-pointer">
                            <span className="w-1/3 whitespace-nowrap overflow-hidden">{song.name}</span>
                            <span className="w-1/3 whitespace-nowrap overflow-hidden justify-center flex">{song.artist}</span>
                            <span className="w-1/3 whitespace-nowrap overflow-hidden flex justify-end">{song.duration}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="w-1/2 bg-slate-50 rounded-md p-3 mdsm:w-full max-w-lg mx-auto">
            {trackPlaying.lyrics.split('|').map(line => <span key={Math.random()} className="block">{line}</span>)}
        </div>
    </div>
</div>
    )
}

export default MusicPage