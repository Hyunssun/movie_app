import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieHome.module.css';

function MovieHome({
  id,
  medium_cover_image,
  title_long,
  genres,
  runtime,
  rating,
}) {
  return (
    <div className={styles.container}>
      <img src={medium_cover_image} alt={title_long} />
      <div className={styles.content}>
        <h2>
          <Link className={styles.movie_title} to={`/movie/${id}`}>
            {title_long}
          </Link>
        </h2>
        <p>
          β­ {rating} | π {runtime === 0 ? 'μ λ³΄ μμ' : `${runtime}λΆ`}
        </p>
        <p>μ₯λ₯΄: {genres && genres.map((g) => <span key={g}>{g} </span>)}</p>
      </div>
    </div>
  );
}

MovieHome.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieHome;
