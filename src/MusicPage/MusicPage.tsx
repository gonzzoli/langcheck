import { useCallback, useContext, useEffect, useState } from "react"
import { LangContext } from "../store/lang-context"
import { musicData, Song } from "./music-data"
import Playlist from "./Playlist"

const pageTitle: {[key: string]: string} = {
    spanish: 'Música',
    portuguese: 'Música',
    english: 'Music',
    french: 'Musique'
}

function MusicPage() {
    const selectedLang = useContext(LangContext).selectedLang
    const [trackPlaying, setTrackPlaying] = useState<Song>(musicData[selectedLang][0])

    // useCallback because this function is being passed to Playlist
    // and Playlist is using React.memo to not 'scramble' the songs
    // everytime a track is selected. 
    const changeTrack = useCallback((track: Song) => {
        setTrackPlaying(track)
    }, [])

    useEffect(() => {
        // every time the language changes
        // set the first song of the language as the
        // playing song
        setTrackPlaying(musicData[selectedLang][0])
    }, [selectedLang])

    return (
<div className="px-[3%] pb-5 ">
    <h1 className="text-center text-2xl pt-5">{pageTitle[selectedLang]}</h1>
    <div className="mt-8 flex gap-8 mdsm:flex-col">
        <div className="w-1/2 flex flex-col items-center mdsm:w-full">
            <iframe src={`https://open.spotify.com/embed/track/${trackPlaying.id}?utm_source=generator`}
            className="w-full bg-black max-w-lg h-[80px] rounded-t-md"
            frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <Playlist onChangeTrack={changeTrack} songs={musicData[selectedLang]} />
        </div>
        <div className="w-1/2 bg-slate-50 rounded-md p-3 mdsm:w-full max-w-lg mx-auto">
            {trackPlaying.lyrics.split('|').map(line => <span key={Math.random()} className="block">{line}</span>)}
        </div>
    </div>
</div>
    )
}

export default MusicPage