import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

type Props = {
  id: number,
  name: string,
  previewImage: string,
  previewVideoLink: string,
  isActive: boolean,
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: (id: number) => void;
}

const CardSize = {
  height: 175,
  width: 280,
};

function Card({...props}: Props) {
  const { width, height } = CardSize;
  const {id, name, previewImage, previewVideoLink, isActive, handleMouseEnter, handleMouseLeave} = props;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
    >
      <Link to={`${AppRoute.Films}/${id}`} className="small-film-card__image">
        <VideoPlayer
          src={previewVideoLink}
          width={width}
          height={height}
          poster={previewImage}
          isActive={isActive}
          muted
        />
      </Link>

      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${id}`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default Card;
