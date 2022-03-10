import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

type Props = {
  id: number,
  name: string,
  image: string,
  previewVideoLink: string,
  isActive: boolean,
  mouseEnterHandler: (id: number) => void;
  mouseLeaveHandler: (id: number) => void;
}

const CardSize = {
  height: 175,
  width: 280,
};

function Card({...props}: Props) {
  const { width, height } = CardSize;
  const {id, name, image, previewVideoLink, isActive, mouseEnterHandler, mouseLeaveHandler} = props;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => mouseEnterHandler(id)}
      onMouseLeave={() => mouseLeaveHandler(id)}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={previewVideoLink}
          width={width}
          height={height}
          poster={image}
          isActive={isActive}
          muted
        />
      </div>

      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${id}`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default Card;
