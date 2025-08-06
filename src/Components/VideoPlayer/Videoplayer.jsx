import React, { useRef } from 'react';
import style from '../VideoPlayer/Videoplayer.module.css';
import video from '../../assets/video.mp4';

export default function Videoplayer({ playstate, setplaystate }) {
  const player = useRef(null);

  const closeplayer = (e) => {
    if (e.target === player.current) {
      setplaystate(false);
    }
  };

  return (
    <div
      className={`${style.videoplayer} ${!playstate ? style.hide : ''}`}
      ref={player}
      onClick={closeplayer} 
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}
