import AudioPlayer from 'react-h5-audio-player';
// import '../styles/globals.css';
import React, { useRef } from 'react';
import { useAppContext } from "../context/useAppContext"

const playlist = [
  { src: 'https://ipfs.io/ipfs/bafybeidhl3ygczc4b3lfn63mpybkhzpfjdsaz2tafpa35zzvqjfxxwblnq/inicio.mp3' },
  // { src: 'https://ipfs.io/ipfs/bafybeidhl3ygczc4b3lfn63mpybkhzpfjdsaz2tafpa35zzvqjfxxwblnq/escondido.mp3' },
]

export const NFTPlayer = () => {
  const { currentTrack, setTrackIndex } = useAppContext()
  const { isPlaying, setIsPlaying } = useAppContext()

  const handleClickPlay = (songToPlay) => {
    if (isPlaying === false) {
      console.log("current state before changed: ", isPlaying)
      console.log("pressing play")
      songToPlay.current.play()
      setIsPlaying(true)
    } else {
      console.log("current state before changed: ", isPlaying)
      console.log("pressing pause")
      songToPlay.current.pause()
      setIsPlaying(false)
    }
  }

  const handleClickNext = () => {
      console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleClickPrev = () => {
      console.log('click prev')
        setTrackIndex((currentTrack) =>
            currentTrack > 1 ? currentTrack - 1 : 0
        );
    };
  
  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
  }

  // console.log("plalist?", playlist)

  // let song = new Audio('https://ipfs.io/ipfs/bafybeidhl3ygczc4b3lfn63mpybkhzpfjdsaz2tafpa35zzvqjfxxwblnq/inicio.mp3')


  const song = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('https://ipfs.io/ipfs/bafybeidhl3ygczc4b3lfn63mpybkhzpfjdsaz2tafpa35zzvqjfxxwblnq/inicio.mp3') : undefined
  );
  // console.log("what is song", song)

  return (
    <div>
      <button
        onClick={() => handleClickPlay(song) }
      >
        PLAY | PAUSE
      </button>
    </div>
  )
}

    //   <AudioPlayer
    //     src={playlist[currentTrack].src}
        
    //     onPlay={e => console.log("onPlay")}
    //     // other props here
    //     // showSkipControls
        
    //     showJumpControls={false}
    //     onClickNext={handleClickNext}
    //     onClickPrevious={handleClickPrev}
    //     onEnded={handleEnd}
    //   />