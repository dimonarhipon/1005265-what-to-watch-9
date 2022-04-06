import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {loadFilmAction} from '../../store/api-action';
import {AppRoute} from '../../const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Loader from '../../components/loader/loader';
dayjs.extend(duration);
/* eslint-disable no-console */
function Player() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {film} = useAppSelector(({FILMS}) => FILMS);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoCurrent = videoRef.current;

  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    videoDuration: videoCurrent?.duration,
  });

  useEffect(() => {
    if (id) {
      dispatch(loadFilmAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    console.log(videoRef && videoCurrent, videoRef, film);

    if (videoRef && videoCurrent) {
      playerState.isPlaying
        ? videoCurrent.play()
        : videoCurrent.pause();
    }
  }, [playerState.isPlaying, videoCurrent, film]);

  if (!film) {
    return <Loader />;
  }

  const handlePlayToggle = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const handleTimeUpdate = () => {
    if (videoRef && videoCurrent) {
      const progress = (videoCurrent.currentTime / videoCurrent.duration) * 100;

      setPlayerState({
        ...playerState,
        videoDuration: videoCurrent.duration - videoCurrent.currentTime,
        progress,
      });
    }
  };

  const handleVideoProgress = (evt: React.FormEvent<HTMLProgressElement>) => {
    if (videoRef && videoCurrent) {
      const target = evt.target as HTMLProgressElement;
      const time = Number(target.value);

      videoCurrent.currentTime = (videoCurrent.duration / 100) * time;
      setPlayerState({
        ...playerState,
        progress: time,
      });
    }
  };

  const handleFullScreenClick = () => {
    if (videoRef && videoCurrent) {
      videoCurrent.requestFullscreen();
    }
  };

  const handleExitClick = () => {
    navigate(`${AppRoute.Films}/${id}`);
  };

  const hours = dayjs.duration(film.runTime, 'minutes').format('HH');
  const minutes = dayjs.duration(film.runTime, 'minutes').format('mm');
  const seconds = dayjs.duration(film.runTime, 'second').format('ss');

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={film.videoLink} />
      </video>
      <button
        onClick={handleExitClick}
        type="button"
        className="player__exit"
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              onChange={(evt) => handleVideoProgress(evt)}
              className="player__progress"
              value={playerState.progress}
              max="100"
            />
            <div
              className="player__toggler"
              style={{ left: `${playerState.progress}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">-{hours}:{minutes}:{seconds}</div>
        </div>
        <div className="player__controls-row">
          <button onClick={handlePlayToggle} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              {playerState.isPlaying ? (
                <use xlinkHref="#pause"></use>
              ) : (
                <use xlinkHref="#play-s" />
              )}
            </svg>
            <span>{playerState.isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{film.name}</div>
          <button
            onClick={handleFullScreenClick}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
