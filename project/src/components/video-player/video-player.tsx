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
  const videoCurrent = videoRef.current;
  const pauseTime = useRef(INITIAL_TIME);

  useEffect(() => {
    if (videoCurrent === null) {
      return;
    }

    if (isActive) {
      videoCurrent.currentTime = pauseTime.current;
      videoCurrent.play();
    } else {
      pauseTime.current = videoCurrent.currentTime;
      videoCurrent.load();
    }
  }, [videoCurrent, isActive]);

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
