// import React from 'react'

import { useContext } from "react"
import Display from "./componenets/Display"
import Player from "./componenets/Player"
import Sidebar from "./componenets/Sidebar"
import { PlayerContext } from "./context/PlayerContext"

const App = () => {
  const {audioRef, track} = useContext(PlayerContext)
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default App