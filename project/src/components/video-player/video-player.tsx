import { useRef, useEffect } from 'react';

type Props = {
  src: string;
  width: number;
  height: number;
  poster: string;
  isActive: boolean;
  muted?: boolean;
}

const INITIAL_TIME = 0;

function VideoPlayer({src, width, height, poster, isActive, muted = false}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pauseTime = useRef(INITIAL_TIME);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      videoRef.current.currentTime = pauseTime.current;
      videoRef.current.play();
    } else {
      pauseTime.current = videoRef.current.currentTime;
      videoRef.current.load();
    }
  }, [videoRef, isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      width={width}
      height={height}
      poster={poster}
      muted={muted}
    >
    </video>
  );
}

export default VideoPlayer;
