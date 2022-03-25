import React from "react"
import { Song } from "./music-data"

function shufflePlaylist(list: Song[]) {
    const copy = [...list]
    return copy.sort((a,b) => Math.random() - 0.5)
}

const Playlist: React.FC<{songs: Song[], 
    onChangeTrack: (song: Song) => void}> 
    = (props) => {
        console.log(props.songs)
    return (
    <div className="bg-white rounded-b-md w-full max-w-lg 
    max-h-72 overflow-y-scroll pr-3
    scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-white">
        {shufflePlaylist(props.songs).map(song => {
            return (
                <div
                key={song.id}
                onClick={() => {props.onChangeTrack(song)}}
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
    )
}

export default React.memo(Playlist)