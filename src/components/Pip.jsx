import React,{useRef} from 'react'
import usePictureInPicture from 'react-use-pip'

export const Pip=()=> {
  const videoRef = useRef(null)
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(videoRef)

  return (
    <div className="App">
      <video ref={videoRef} autoPlay muted controls loop width="100%">
        <source src='https://www.youtube.com/watch?v=U3ASj1L6_sY' />
      </video>
      {isPictureInPictureAvailable && (
        <button
          onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
        >
          {isPictureInPictureActive ? 'Disable' : 'Enable'} Picture in Picture
        </button>
      )}
    </div>
  )
}