import PropTypes from 'prop-types';

function MovieDetail({
  medium_cover_image,
  title_long,
  genres,
  runtime,
  rating,
  description_full,
}) {
  return (
    <div>
      <img src={medium_cover_image} alt={title_long} />
      <h2>{title_long}</h2>
      <p>
        ⭐ {rating} | 🕓 {runtime === 0 ? '정보 없음' : `${runtime}분`}
      </p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <div>{description_full}</div>
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
