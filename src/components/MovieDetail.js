import PropTypes from 'prop-types';
import styles from '../styles/MovieDetail.module.css';

function MovieDetail({
  medium_cover_image,
  title_long,
  genres,
  runtime,
  rating,
  description_full,
}) {
  return (
    <div className={styles.container}>
      <img src={medium_cover_image} alt={title_long} />
      <div className={styles.content}>
        <h2>{title_long}</h2>
        <p>
          β­ {rating} | π {runtime === 0 ? 'μ λ³΄ μμ' : `${runtime}λΆ`}
        </p>
        <p>μ₯λ₯΄: {genres && genres.map((g) => <span key={g}>{g} </span>)}</p>
        <div>{description_full}</div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description_full: PropTypes.string.isRequired,
};

export default MovieDetail;
