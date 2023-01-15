import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({
  id,
  medium_cover_image,
  title_long,
  genres,
  runtime,
  rating,
}) {
  return (
    <div>
      <img src={medium_cover_image} alt={title_long} />
      <h2>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h2>
      <p>
        ⭐ {rating} | 🕓 {runtime === 0 ? '정보 없음' : `${runtime}분`}
      </p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
