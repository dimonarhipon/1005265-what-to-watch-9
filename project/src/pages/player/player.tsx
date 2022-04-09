import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {loadFilmAction} from '../../store/api-action';
import {AppRoute} from '../../const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Loader from '../../components/loader/loader';
dayjs.extend(duration);

function Player() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {film, isDataLoaded} = useAppSelector(({FILMS}) => FILMS);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    videoDuration: videoRef.current?.duration,
  });

  useEffect(() => {
    if (id) {
      dispatch(loadFilmAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (videoRef.current) {

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined && videoRef.current) {
        playPromise.then(() => {
          playerState.isPlaying
            ? videoRef.current?.play()
            : videoRef.current?.pause();
        });
      }

      playerState.isPlaying
        ? videoRef.current?.play()
        : videoRef.current?.pause();
    }

  }, [isDataLoaded, playerState.isPlaying, videoRef, film]);


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
    if (videoRef && videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;

      setPlayerState({
        ...playerState,
        videoDuration: videoRef.current.duration - videoRef.current.currentTime,
        progress,
      });
    }
  };

  const handleVideoProgress = (evt: React.FormEvent<HTMLProgressElement>) => {
    if (videoRef && videoRef.current) {
      const target = evt.target as HTMLProgressElement;
      const time = Number(target.value);

      videoRef.current.currentTime = (videoRef.current.duration / 100) * time;
      setPlayerState({
        ...playerState,
        progress: time,
      });
    }
  };

  const handleFullScreenClick = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleExitClick = () => {
    navigate(`${AppRoute.Films}/${id}`);
  };

  const durationFilm = dayjs.duration(playerState.videoDuration || film.runTime, 'seconds');

  const formatedDurationFilm = durationFilm.asHours() >= 1
    ? durationFilm.format('-HH:mm:ss')
    : durationFilm.format('-mm:ss');

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleTimeUpdate}
        autoPlay
        muted
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
          <div className="player__time-value">
            {formatedDurationFilm}
          </div>
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
